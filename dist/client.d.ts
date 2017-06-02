export interface Options {
    host: string;
    port: int;
    database: string;
    user: string;
    password: string;
    autoReconnect?: boolean;
    characterEncoding?: string;
    logger?: string;
    profileSQL?: boolean;
    testOnBorrow?: boolean;
    useSSL?: boolean;
}
export interface Client {
    getInt(bucket: string, key: string): number | null;
    getFloat(bucket: string, key: string): number | null;
    getString(bucket: string, key: string): string | null;
    getJSON(bucket: string, key: string): any | null;
    setInt(bucket: string, key: string, value: number, ttl?: number): any;
    setFloat(bucket: string, key: string, value: number, ttl?: number): any;
    setString(bucket: string, key: string, value: string, ttl?: number): any;
    setJSON(bucket: string, key: string, json: any, ttl?: number): any;
    fetch(bucket: string, key: string): byte[] | null;
    put(bucket: string, key: string, data: byte[], ttl?: number): any;
    ensureTable(table: string, pkey: string, type: string): any;
    ensureColumn(table: string, column: string, type: string): any;
    ensureIndex(table: string, columns: string[]): any;
    ensureUniqueIndex(table: string, columns: string[]): any;
    one<T>(sql: string, parameters?: any[]): T | null;
    list<T>(sql: string, parameters?: any[]): T[];
    insert(table: string, object: any): any;
    upsert(table: string, object: any): any;
    execute(sql: string, parameters?: any[]): any;
    delete(bucket_or_table: string, key: any): any;
    close(): any;
}
