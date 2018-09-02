const RowMapper = Java.type("org.springframework.jdbc.core.RowMapper")

export const rowMapper = new RowMapper((resultSet: java.sql.ResultSet) => {
    let row: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnLabel(i)
        let type = resultSet.getMetaData().getColumnTypeName(i)
        if (resultSet.getObject(i) === null) {
            row[key] = null
        } else if (type.toUpperCase() === "JSON") {
            row[key] = JSON.parse(resultSet.getString(i))
        } else {
            row[key] = resultSet.getObject(i)
        }
    }
    return row
})


export interface Options {
    host: string
    port: number
    database: string
    user: string
    password: string

    autoReconnect?: boolean
    characterEncoding?: string
    character_set_server?: string
    testOnBorrow?: boolean
    useSSL?: boolean
    useUnicode?: boolean
}

export class Client {
    db: org.springframework.jdbc.core.JdbcTemplate

    constructor(options: Options) {
        const { host, port, database, user, password } = options
        let url = `jdbc:mysql://${host}:${port}/${database}?user=${user}&password=${password}`
        url += `&characterEncoding=${options.characterEncoding || "UTF-8"}`
        url += `&character_set_server=${options.character_set_server || "utf8mb4"}`
        url += `&useUnicode=${options.useUnicode === undefined ? true : options.useUnicode}`
        if (options.autoReconnect !== undefined) url += `&autoReconnect=${options.autoReconnect}`
        if (options.testOnBorrow !== undefined) url += `&testOnBorrow=${options.testOnBorrow}`
        if (options.useSSL !== undefined) url += `&useSSL=${options.useSSL}`

        const dataSource = new com.zaxxer.hikari.HikariDataSource()
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver")
        dataSource.setJdbcUrl(url)
        this.db = new org.springframework.jdbc.core.JdbcTemplate(dataSource)
    }

    query(sql: string, args?: any[]): any[] {
        return Java.from(
            args === undefined ? this.db.query(sql, rowMapper) : this.db.query(sql, args, rowMapper)
        )
    }

    queryForObject(sql: string, args?: any[]): any {
        try {
            return args === undefined ? this.db.queryForObject(sql, rowMapper) : this.db.queryForObject(sql, args, rowMapper)
        } catch (e) {
            if (e instanceof org.springframework.dao.EmptyResultDataAccessException) {
                return null
            } else {
                throw e
            }
        }
    }

    execute(sql: string) {
        return this.db.execute(sql)
    }

    update(sql: string, args: any[]) {
        return this.db.update(sql, args)
    }

    ensureColumn(table: string, column: string, type: string) {
        let columns = this.query(`SHOW COLUMNS FROM ${table} LIKE ?`, [column])
        if (columns.length === 0) {
            this.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
        }
    }

    ensureIndex(table: string, columns: string[], options = { type: "", separator: "_idx_" }) {
        let name = table + options.separator + columns.join("_")
        let indexes = this.query(`SHOW INDEX FROM ${table} WHERE key_name = ?`, [name])
        if (indexes.length === 0) {
            this.execute(`
                CREATE ${options.type} INDEX ${name} ON ${table} (${columns.join(",")})
            `)
        }
    }

    ensureUniqueIndex(table: string, columns: string[]) {
        this.ensureIndex(table, columns, { type: "UNIQUE", separator: "_uidx_" })
    }

    ensureFullTextIndex(table: string, columns: string[]) {
        this.ensureIndex(table, columns, { type: "FULLTEXT", separator: "_ft_" })
    }
}
