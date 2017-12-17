export declare const BIGINT = "BIGINT";
export declare const BOOL = "BOOL";
export declare const TEXT = "TEXT";
export declare const VARCHAR: (length: number) => string;
export interface Options {
    host: string;
    port: int;
    database: string;
    user: string;
    password: string;
    autoReconnect?: boolean;
    characterEncoding?: string;
    testOnBorrow?: boolean;
    useSSL?: boolean;
}
export declare const rowMapper: any;
export declare class Client {
    jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate;
    defaultRowMapper: org.springframework.jdbc.core.RowMapper<any>;
    constructor(options: Options, defaultRowMapper?: org.springframework.jdbc.core.RowMapper<any>);
    ensureTable(table: string, pkey: string, type: string): void;
    query(sql: string, args?: any[]): java.util.List<any>;
    queryForObject(sql: string, args?: any[]): any;
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
