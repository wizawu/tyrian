import { Model } from "./model";
export * from "./model";
export interface Options {
    host: string;
    port: int;
    database: string;
    password: string;
    user: string;
    autoReconnect?: boolean;
    characterEncoding?: string;
    testOnBorrow?: boolean;
    useSSL?: boolean;
    defaultEngine?: string;
}
export declare class Client {
    db: org.springframework.jdbc.core.JdbcTemplate;
    defaultEngine: string;
    constructor(options: Options);
    ensureTable(table: string, pkey: string, type: string, engine?: string): void;
    ensureColumn(table: string, column: string, type: string): void;
    ensureIndex(table: string, columns: string[], options?: {
        unique: boolean;
    }): void;
    ensureUniqueIndex(table: string, columns: string[]): void;
    ensureFullText(table: string, columns: string[]): void;
    query(sql: string, args?: any[]): any[];
    queryForObject(sql: string, args?: any[]): {};
    insert(table: string, doc: Model, options?: {
        upsert: boolean;
    }): void;
    upsert(table: string, doc: Model): void;
}
