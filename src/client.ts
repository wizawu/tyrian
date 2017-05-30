export interface Options {
    host: string
    port: int
    database: string
    user: string
    password: string

    autoReconnect?: boolean
    characterEncoding?: string
    useSSL?: boolean
}

interface ConnectionImpl {
    ensureTable(tableName: string)
    ensureColumn(tableName: string, columnName: string, columnType: string)
    ensurePrimaryKey(tableName: string, columnName: string)
    ensureIndex(tableName: string, columnNames: string[])
    ensureUniqueIndex(tableName: string, columnNames: string[])
    one<T>(sql: string, parameters: any[]): T | null
    list<T>(sql: string, parameters: any[]): T[]
    save(tableName: string, obj: any, primary: string)
    execute(sql: string, parameters: any[])
    close()
}

export default ConnectionImpl
