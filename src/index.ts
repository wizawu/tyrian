const JdbcTemplate = org.springframework.jdbc.core.JdbcTemplate
const MysqlDataSource = com.mysql.cj.jdbc.MysqlDataSource
const RowMapper = Java.type("org.springframework.jdbc.core.RowMapper")

export const BIGINT = "BIGINT"
export const BOOL = "BOOL"
export const TEXT = "TEXT"
export const VARCHAR = (length: number) => `VARCHAR(${length})`

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

export const rowMapper = new RowMapper((resultSet: java.sql.ResultSet) => {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        let type = resultSet.getMetaData().getColumnTypeName(i)
        if (resultSet.getObject(i) == null) {
            json[key] = null
        } else if (type.toUpperCase() === "JSON") {
            json[key] = JSON.parse(resultSet.getString(i))
        } else {
            json[key] = resultSet.getObject(i)
        }
    }
    return json
})

export class Client {
    jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate
    defaultRowMapper: org.springframework.jdbc.core.RowMapper<any>

    constructor(options: Options, defaultRowMapper?: org.springframework.jdbc.core.RowMapper<any>) {
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
        this.defaultRowMapper = defaultRowMapper || rowMapper
    }

    ensureTable(table: string, pkey: string, type: string) {
        this.jdbcTemplate.execute(`
            CREATE TABLE IF NOT EXISTS ${table} (${pkey} ${type} PRIMARY KEY)
        `)
    }

    query(sql: string, args?: any[]) {
        if (args === undefined) {
            return this.jdbcTemplate.query(sql, this.defaultRowMapper)
        } else {
            return this.jdbcTemplate.query(sql, args, this.defaultRowMapper)
        }
    }

    queryForObject(sql: string, args?: any[]) {
        if (args === undefined) {
            this.jdbcTemplate.queryForObject(sql, this.defaultRowMapper)
        } else {
            this.jdbcTemplate.queryForObject(sql, args, this.defaultRowMapper)
        }
    }

    ensureColumn(table: string, column: string, type: string) {
        let columns = Java.from(this.query("SHOW COLUMNS FROM " + table))
        if (columns.some(col => col.COLUMN_NAME === column)) return
        this.jdbcTemplate.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
    }

    ensureIndex(table: string, columns: string[], options = { unique: false }) {
        let index = table + (options.unique ? "_uidx_" : "_idx_") + columns.join("_")
        let indexes = Java.from(this.query("SHOW INDEX FROM " + table))
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
                if (typeof value === "object") {
                    return value === null ? null : JSON.stringify(value)
                } else {
                    return value
                }
            })
        )
    }

    upsert(table: string, object: Object) {
        this.insert(table, object, { upsert: true })
    }
}
