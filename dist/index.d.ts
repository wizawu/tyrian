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
    rewriteBatchedStatements?: boolean;
    testOnBorrow?: boolean;
    useSSL?: boolean;
    useServerPrepStmts?: boolean;
}
export declare const mapRow: any;
export declare class Client {
    jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate;
    constructor(options: Options);
    ensureTable(table: string, pkey: string, type: string): void;
    ensureColumn(table: string, column: string, type: string): void;
    ensureIndex(table: string, columns: string[], options?: {
        unique: boolean;
    }): void;
    ensureUniqueIndex(table: string, columns: string[]): void;
    insert(table: string, object: Object, options?: {
        upsert: boolean;
    }): void;
    upsert(table: string, object: Object): void;
}
