export interface Options {
    host: string
    port: int
    database: string
    user: string
    password: string

    autoReconnect?: boolean
    characterEncoding?: string
    testOnBorrow?: boolean
    useSSL?: boolean
}

export interface Client {
    // Key-value store
    getInt(bucket: string, key: string): number | null
    getFloat(bucket: string, key: string): number | null
    getString(bucket: string, key: string): string | null
    getJSON(bucket: string, key: string): any | null
    setInt(bucket: string, key: string, value: number, ttl?: number)
    setFloat(bucket: string, key: string, value: number, ttl?: number)
    setString(bucket: string, key: string, value: string, ttl?: number)
    setJSON(bucket: string, key: string, json: any, ttl?: number)

    // Object store
    get(bucket: string, key: string): byte[] | null
    put(bucket: string, key: string, data: byte[], ttl?: number)

    // RDBMS
    ensureTable(table: string, pkey: string, type: string)
    ensureColumn(table: string, column: string, type: string)
    ensureIndex(table: string, columns: string[])
    ensureUniqueIndex(table: string, columns: string[])
    one<T>(sql: string, parameters?: any[]): T | null
    list<T>(sql: string, parameters?: any[]): T[]
    insert(table: string, object: any)
    upsert(table: string, object: any)
    execute(sql: string, parameters?: any[])

    delete(bucket_or_table: string, key: any)
    close()
}
