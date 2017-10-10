const JdbcTemplate = org.springframework.jdbc.core.JdbcTemplate
const MysqlDataSource = com.mysql.cj.jdbc.MysqlDataSource

export interface Options {
    host: string
    port: int
    database: string
    user: string
    password: string

    autoReconnect?: boolean
    characterEncoding?: string
    logger?: string
    profileSQL?: boolean
    rewriteBatchedStatements?: boolean
    testOnBorrow?: boolean
    useSSL?: boolean
    useServerPrepStmts?: boolean
}

export function mapRow(resultSet: java.sql.ResultSet) {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        let type = resultSet.getMetaData().getColumnTypeName(i)
        if (type.toUpperCase() === "JSON") {
            json.put(key, JSON.parse(resultSet.getString(i)))
        } else {
            json.put(key, resultSet.getObject(i))
        }
    }
    return json
}

export class Client {
    jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate

    constructor(options: Options) {
        const { host, port, database, user, password } = options
        let url = `jdbc:mysql://${host}:${port}/${database}?user=${user}&password=${password}`
        url += `&characterEncoding=${options.characterEncoding || "UTF-8"}`
        if (options.autoReconnect !== undefined) {
            url += `&autoReconnect=${options.autoReconnect}`
        }
        if (options.logger !== undefined) {
            url += `&logger=${options.logger}`
        }
        if (options.profileSQL !== undefined) {
            url += `&profileSQL=${options.profileSQL}`
        }
        if (options.rewriteBatchedStatements !== undefined) {
            url += `&rewriteBatchedStatements=${options.rewriteBatchedStatements}`
        }
        if (options.testOnBorrow !== undefined) {
            url += `&testOnBorrow=${options.testOnBorrow}`
        }
        if (options.useSSL !== undefined) {
            url += `&useSSL=${options.useSSL}`
        }
        if (options.useServerPrepStmts !== undefined) {
            url += `&useServerPrepStmts=${options.useServerPrepStmts}`
        }
        const dataSource = new MysqlDataSource()
        dataSource.setURL(url)
        this.jdbcTemplate = new JdbcTemplate(dataSource)
    }

    ensureTable(table: string, pkey: string, type: string) {
        this.jdbcTemplate.execute(`
            CREATE TEABLE IF NOT EXISTS ${table} (${pkey} ${type} PRIMARY KEY)
        `)
    }

    ensureColumn(table: string, column: string, type: string) {
        let columns = this.jdbcTemplate.query("SHOW COLUMNS FROM " + table, mapRow)
        if (columns.some(col => col.COLUMN_NAME === column)) return
        this.jdbcTemplate.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
    }

    ensureIndex(table: string, columns: string[], options = { unique: false }) {
        let index = table + (options.unique ? "_uidx_" : "_idx_") + columns.join("_")
        let indexes = this.jdbcTemplate.query("SHOW INDEX FROM " + table, mapRow)
        if (indexes.some(idx => idx.INDEX_NAME === index)) return
        this.jdbcTemplate.execute(`
            CREATE ${options.unique ? "UNIQUE" : ""} INDEX ${index} ON ${table}(${columns.join(",")})
        `)
    }

    ensureUniqueIndex(table: string, columns: string[]) {
        this.ensureIndex(table, columns, { unique: true })
    }

    insert(table: string, object: Object, options = { upsert: false }) {
        let keys = Object.keys(object).join(",")
        let values = Object.keys(object).map(() => "?").join(",")
        this.jdbcTemplate.update(
            `${options.upsert ? "REPLACE" : "INSERT"} INTO ${table}(${keys}) VALUES(${values})`,
            Object.keys(object).map(key => {
                let value = object[key]
                return typeof value === "object" ? JSON.stringify(value) : value
            })
        )
    }

    upsert(table: string, object: Object) {
        this.insert(table, object, { upsert: true })
    }
}
