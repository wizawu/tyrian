import { Model } from "./model";
export * from "./model";
export declare enum Collate {
    utf8_bin = "utf8_bin",
    utf8mb4_unicode_ci = "utf8mb4_unicode_ci",
}
export declare enum Engine {
    ARCHIVE = "ARCHIVE",
    BLACKHOLE = "BLACKHOLE",
    CSV = "CSV",
    FEDERATED = "FEDERATED",
    INNODB = "INNODB",
    MEMORY = "MEMORY",
    MRG_MYISAM = "MRG_MYISAM",
    MYISAM = "MYISAM",
    PERFORMANCE_SCHEMA = "PERFORMANCE_SCHEMA",
    ROCKSDB = "ROCKSDB",
}
export declare enum Parser {
    mecab = "mecab",
    ngram = "ngram",
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
}
export declare class Client {
    db: org.springframework.jdbc.core.JdbcTemplate;
    constructor(options: Options);
    $: {
        innodb_flush_log_at_trx_commit(value: number): void;
    };
    ensureTable(table: string, pkey: string, type: string, engine?: Engine, collate?: Collate): void;
    ensureColumn(table: string, column: string, type: string): void;
    ensureIndex(table: string, columns: string[], options?: {
        type: string;
        separator: string;
        parser: string;
    }): void;
    ensureUniqueIndex(table: string, columns: string[]): void;
    ensureFullText(table: string, columns: string[], parser?: Parser): void;
    query(sql: string, args?: any[]): any[];
    queryForObject(sql: string, args?: any[]): any;
    update(sql: string, ...args: any[]): number;
    insert(table: string, doc: Model, options?: {
        upsert: boolean;
    }): number;
    upsert(table: string, doc: Model): number;
    batchInsert(table: string, docs: Model[], options?: {
        upsert: boolean;
    }): number[] | undefined;
    batchUpsert(table: string, docs: Model[]): void;
}
