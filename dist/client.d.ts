export interface Options {
    host: string;
    port: int;
    database: string;
    user: string;
    password: string;
    defaultEngine?: string;
    autoReconnect?: boolean;
    characterEncoding?: string;
    logger?: string;
    profileSQL?: boolean;
    rewriteBatchedStatements?: boolean;
    testOnBorrow?: boolean;
    useSSL?: boolean;
    useServerPrepStmts?: boolean;
}
export interface Client {
    get(bucket: string, key: string): number | string | byte[] | null;
    getJSON<T>(bucket: string, key: string): T | null;
    setInt(bucket: string, key: string, value: number, ttl?: number): any;
    setFloat(bucket: string, key: string, value: number, ttl?: number): any;
    setString(bucket: string, key: string, value: string, ttl?: number): any;
    setJSON(bucket: string, key: string, json: Object, ttl?: number): any;
    setBlob(bucket: string, key: string, data: byte[], ttl?: number): any;
    ensureTable(table: string, pkey: string, type: string): any;
    ensureColumn(table: string, column: string, type: string): any;
    ensureIndex(table: string, columns: string[]): any;
    ensureUniqueIndex(table: string, columns: string[]): any;
    one<T>(sql: string, parameters?: any[]): T | null;
    list<T>(sql: string, parameters?: any[]): T[];
    insert(table: string, object: Object): any;
    upsert(table: string, object: Object): any;
    execute(sql: string, parameters?: any[]): any;
    delete(bucket_or_table: string, key: number | string): any;
    close(): any;
}
