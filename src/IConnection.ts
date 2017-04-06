interface ConnectOptions {
    server: string
    port: int
    database: string
    user: string
    password: string
}

interface IConnection {
    ensureTable(tableName: string)
    ensureColumn(tableName: string, columnName: string, columnType: string)
    ensureIndex(tableName: string, columnNames: string[])
    ensureUniqueIndex(tableName: string, columnNames: string[])
    one<T>(type: Class<T>, sql: string, parameters: Array<Any>): T | null
    list<T>(type: Class<T>, sql: string, parameters: Array<Any>): ArrayList<T>
    save(tableName: string, obj: Any, primary: string)
    execute(sql: string, parameters: Array<Any>)
    close()
}