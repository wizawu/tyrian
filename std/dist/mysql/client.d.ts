import { Collate, Engine, Parser } from "./constant";
export declare const rowMapper: any;
export interface TableOptions {
    collate?: Collate;
    engine?: Engine;
}
export interface Options {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
    autoReconnect?: boolean;
    characterEncoding?: string;
    testOnBorrow?: boolean;
    useSSL?: boolean;
}
export declare class Client {
    db: org.springframework.jdbc.core.JdbcTemplate;
    constructor(options: Options);
    query(sql: string, args?: any[]): any;
    queryForObject(sql: string, args?: any[]): any;
    execute(sql: string): void;
    update(sql: string, args: any[]): number;
    ensureTable(table: string, pkey: string, type: string, options?: TableOptions): void;
    ensureColumn(table: string, column: string, type: string): void;
    ensureIndex(table: string, columns: string[], options?: {
        type: string;
        separator: string;
        parser: string;
    }): void;
    ensureUniqueIndex(table: string, columns: string[]): void;
    ensureFullTextIndex(table: string, columns: string[], parser?: Parser): void;
}
