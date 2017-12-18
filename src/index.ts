import { Model, rowMapper } from "./model"

export * from "./model"

export enum Engine {
    ARCHIVE = "ARCHIVE",
    BLACKHOLE = "BLACKHOLE",
    CSV = "CSV",
    FEDERATED = "FEDERATED",
    InnoDB = "InnoDB",
    MEMORY = "MEMORY",
    MRG_MYISAM = "MRG_MYISAM",
    MyISAM = "MyISAM",
    PERFORMANCE_SCHEMA = "PERFORMANCE_SCHEMA",
    ROCKSDB = "ROCKSDB",
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

        const dataSource = new com.mysql.cj.jdbc.MysqlDataSource()
        dataSource.setURL(url)
        this.db = new org.springframework.jdbc.core.JdbcTemplate(dataSource)
    }

    ensureTable(table: string, pkey: string, type: string, engine = Engine.InnoDB) {
        this.db.execute(`
            CREATE TABLE IF NOT EXISTS ${table} (
                ${pkey} ${type} PRIMARY KEY
            ) ENGINE = ${engine}
        `)
    }

    ensureColumn(table: string, column: string, type: string) {
        let columns = this.query("SHOW COLUMNS FROM " + table)
        if (columns.some(col => col.Field === column)) return
        this.db.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
    }

    ensureIndex(table: string, columns: string[], options = { unique: false }) {
        let index = table + (options.unique ? "_uidx_" : "_idx_") + columns.join("_")
        let indexes = this.query("SHOW INDEX FROM " + table)
        if (indexes.some(idx => idx.Key_name === index)) return
        this.db.execute(`
            CREATE ${options.unique ? "UNIQUE" : ""} INDEX ${index} ON ${table}(${columns.join(",")})
        `)
    }

    ensureUniqueIndex(table: string, columns: string[]) {
        this.ensureIndex(table, columns, { unique: true })
    }

    ensureFullText(table: string, columns: string[]) {
        let index = table + "_ft_" + columns.join("_")
        let indexes = this.query("SHOW INDEX FROM " + table)
        if (indexes.some(idx => idx.Key_name === index)) return
        this.db.execute(`
            ALTER TABLE ${table} ADD FULLTEXT ${index}(${columns.join(",")}) WITH PARSER ngram
        `)
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
