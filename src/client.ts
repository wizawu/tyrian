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
    testOnBorrow?: boolean
    useSSL?: boolean
}

export interface Client {
    // Key-value store
    get(bucket: string, key: string): number | string | Object | null
    getJSON(bucket: string, key: string): Object | null
    setInt(bucket: string, key: string, value: number, ttl?: number)
    setFloat(bucket: string, key: string, value: number, ttl?: number)
    setString(bucket: string, key: string, value: string, ttl?: number)
    putInt(bucket: string, key: string, value: number, ttl?: number)
    putFloat(bucket: string, key: string, value: number, ttl?: number)
    putString(bucket: string, key: string, value: string, ttl?: number)
    putJSON(bucket: string, key: string, json: Object, ttl?: number)
    putBytes(bucket: string, key: string, data: byte[], ttl?: number)

    // RDBMS
    ensureTable(table: string, pkey: string, type: string)
    ensureColumn(table: string, column: string, type: string)
    ensureIndex(table: string, columns: string[])
    ensureUniqueIndex(table: string, columns: string[])
    one(sql: string, parameters?: any[]): Object | null
    list(sql: string, parameters?: any[]): Object[]
    insert(table: string, object: Object)
    upsert(table: string, object: Object)
    execute(sql: string, parameters?: any[])

    delete(bucket_or_table: string, key: number | string)
    close()
}
