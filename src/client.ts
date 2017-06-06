export interface Options {
    host: string
    port: int
    database: string
    user: string
    password: string
    defaultEngine?: string

    autoReconnect?: boolean
    characterEncoding?: string
    logger?: string
    profileSQL?: boolean
    rewriteBatchedStatements?: boolean
    testOnBorrow?: boolean
    useSSL?: boolean
    useServerPrepStmts?: boolean
}

export interface Client {
    // Key-value store
    get(bucket: string, key: string): number | string | byte[] | null
    getJSON<T>(bucket: string, key: string): T | null
    setInt(bucket: string, key: string, value: number, ttl?: number)
    setFloat(bucket: string, key: string, value: number, ttl?: number)
    setString(bucket: string, key: string, value: string, ttl?: number)
    setJSON(bucket: string, key: string, json: Object, ttl?: number)
    setBlob(bucket: string, key: string, data: byte[], ttl?: number)

    // RDBMS
    ensureTable(table: string, pkey: string, type: string)
    ensureColumn(table: string, column: string, type: string)
    ensureIndex(table: string, columns: string[])
    ensureUniqueIndex(table: string, columns: string[])
    one<T>(sql: string, parameters?: any[]): T | null
    list<T>(sql: string, parameters?: any[]): T[]
    insert(table: string, object: Object)
    upsert(table: string, object: Object)
    execute(sql: string, parameters?: any[])

    delete(bucket_or_table: string, key: number | string)
    close()
}
