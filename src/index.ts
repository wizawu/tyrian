import { Model, rowMapper } from "./model"

export * from "./model"

export enum Collate {
    utf8_bin = "utf8_bin",
    utf8mb4_unicode_ci = "utf8mb4_unicode_ci",
}

export enum Engine {
    ARCHIVE = "ARCHIVE",
    BLACKHOLE = "BLACKHOLE",
    CSV = "CSV",
    FEDERATED = "FEDERATED",
    INNODB = "INNODB",
    MEMORY = "MEMORY",
    MRG_MYISAM = "MRG_MYISAM",
    MYISAM = "MYISAM",
    PERFORMANCE_SCHEMA = "PERFORMANCE_SCHEMA",
    ROCKSDB = "ROCKSDB",
}

export enum Parser {
    mecab = "mecab",
    ngram = "ngram",
}

export interface Options {
    host: string
    port: int
    database: string
    password: string
    user: string

    autoReconnect?: boolean
    characterEncoding?: string
    testOnBorrow?: boolean
    useSSL?: boolean
}

export class Client {
    db: org.springframework.jdbc.core.JdbcTemplate

    constructor(options: Options) {
        const { host, port, database, user, password } = options
        let url = `jdbc:mysql://${host}:${port}/${database}?user=${user}&password=${password}`
        url += `&characterEncoding=${options.characterEncoding || "UTF-8"}`
        if (options.autoReconnect !== undefined) url += `&autoReconnect=${options.autoReconnect}`
        if (options.testOnBorrow !== undefined) url += `&testOnBorrow=${options.testOnBorrow}`
        if (options.useSSL !== undefined) url += `&useSSL=${options.useSSL}`

        const dataSource = new com.zaxxer.hikari.HikariDataSource()
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver")
        dataSource.setJdbcUrl(url)
        this.db = new org.springframework.jdbc.core.JdbcTemplate(dataSource)

        Object.keys(this.$).forEach(variable => this.$[variable] = this.$[variable].bind(this))
    }

    $ = {
        innodb_flush_log_at_trx_commit(value: number) {
            this.db.execute("SET GLOBAL innodb_flush_log_at_trx_commit = " + value)
        }
    }

    ensureTable(table: string, pkey: string, type: string, engine = Engine.INNODB, collate?: Collate) {
        this.db.execute(`
            CREATE TABLE IF NOT EXISTS ${table} (
                ${pkey} ${type} PRIMARY KEY
            ) ENGINE = ${engine} ${collate ? ", COLLATE " + collate : ""}
        `)
    }

    ensureColumn(table: string, column: string, type: string) {
        let columns = this.query(`SHOW COLUMNS FROM ${table} LIKE ?`, [column])
        if (columns.length === 0) {
            this.db.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
        }
    }

    ensureIndex(table: string, columns: string[], options = { type: "", separator: "_idx_", parser: "" }) {
        let name = table + options.separator + columns.join("_")
        let indexes = this.query(`SHOW INDEX FROM ${table} WHERE Key_name = ?`, [name])
        if (indexes.length === 0) {
            this.db.execute(`
                CREATE ${options.type} INDEX ${name} ON ${table}(${columns.join(",")}) ${options.parser}
            `)
        }
    }

    ensureUniqueIndex(table: string, columns: string[]) {
        this.ensureIndex(table, columns, { type: "UNIQUE", separator: "_uidx_", parser: "" })
    }

    ensureFullText(table: string, columns: string[], parser = Parser.ngram) {
        this.ensureIndex(table, columns, { type: "FULLTEXT", separator: "_ft_", parser: `WITH PARSER ${parser}` })
    }

    query(sql: string, args?: any[]): any[] {
        return Java.from(
            args === undefined ? this.db.query(sql, rowMapper) : this.db.query(sql, args, rowMapper)
        )
    }

    queryForObject(sql: string, args?: any[]): any {
        return args === undefined ? this.db.queryForObject(sql, rowMapper) : this.db.queryForObject(sql, args, rowMapper)
    }

    update(sql: string, ...args: any[]) {
        return this.db.update(sql, args)
    }

    insert(table: string, doc: Model, options = { upsert: false }) {
        let Doc: any = doc.constructor
        let keys = Object.keys(new Doc())
        let values = keys.map(() => "?").join(",")
        return this.db.update(
            `${options.upsert ? "REPLACE" : "INSERT"} INTO ${table}(${keys.join(",")}) VALUES(${values})`,
            keys.map(key => {
                let value = doc[key]
                if (typeof value === "object") {
                    return value === null ? null : JSON.stringify(value)
                } else {
                    return value
                }
            })
        )
    }

    upsert(table: string, doc: Model) {
        return this.insert(table, doc, { upsert: true })
    }
}
