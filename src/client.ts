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

export interface Client {
    // Key-value store
    getInt(key: string): number | null
    getInt(bucket: string, key: string): number | null
    getFloat(key: string): number | null
    getFloat(bucket: string, key: string): number | null
    getString(key: string): string | null
    getString(bucket: string, key: string): string | null
    getJSON(key: string): any | null
    getJSON(bucket: string, key: string): any | null
    setInt(key: string, value: number, ttl?: number)
    setInt(bucket: string, key: string, value: number, ttl?: number)
    setFloat(key: string, value: number, ttl?: number)
    setFloat(bucket: string, key: string, value: number, ttl?: number)
    setString(key: string, value: string, ttl?: number)
    setString(bucket: string, key: string, value: string, ttl?: number)
    setJSON(key: string, json: any, ttl?: number)
    setJSON(bucket: string, key: string, json: any, ttl?: number)

    // RDBMS
    ensureTable(table: string, pkey: string, type: string)
    ensureColumn(table: string, column: string, type: string)
    ensureIndex(table: string, columns: string[])
    ensureUniqueIndex(table: string, columns: string[])
    one<T>(sql: string, parameters?: any[]): T | null
    list<T>(sql: string, parameters?: any[]): T[]
    insert(table: string, object: any)
    update(table: string, object: any)
    save(table: string, object: any)
    execute(sql: string, parameters?: any[])

    // Object store
    get(key: string): java.lang.Byte[]
    get(bucket: string, key: string): java.lang.Byte[]
    put(key: string, data: java.lang.Byte[], ttl?: number)
    put(bucket: string, key: string, data: java.lang.Byte[], ttl?: number)

    delete(table: string, key: any)
    delete(bucket: string, key: string)
    close()
}
