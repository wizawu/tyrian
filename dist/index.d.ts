import { Model } from "./model";
export * from "./model";
export declare enum Engine {
    ARCHIVE = "ARCHIVE",
    BLACKHOLE = "BLACKHOLE",
    CSV = "CSV",
    FEDERATED = "FEDERATED",
    InnoDB = "InnoDB",
    MEMORY = "MEMORY",
    MRG_MYISAM = "MRG_MYISAM",
    MyISAM = "MyISAM",
    PERFORMANCE_SCHEMA = "PERFORMANCE_SCHEMA",
    ROCKSDB = "ROCKSDB",
}
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
    queryForObject(sql: string, args?: any[]): any;
    update(sql: string, ...args: any[]): number;
    insert(table: string, doc: Model, options?: {
        upsert: boolean;
    }): number;
    upsert(table: string, doc: Model): number;
}
