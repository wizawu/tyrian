import { Client, TableOptions } from "./client";
import { Parser } from "./constant";
export declare class __Table__ {
    static readonly TABLE_NAME: string;
    static setClient(client: Client): typeof __Table__;
    static ensureTable(options?: TableOptions): void;
    static ensureIndex(columns: string[]): void;
    static ensureUniqueIndex(columns: string[]): void;
    static ensureFullTextIndex(columns: string[], parser?: Parser): void;
    static get(query: object): object | null;
    static list(query: object): object[];
    static delete(query: object): number;
    static insert(row: object, options?: {
        upsert: boolean;
    }): number;
    static upsert(row: object): number;
    static batchInsert(rows: object[], options?: {
        upsert: boolean;
    }): number[];
    static batchUpsert(rows: object[]): number[];
    static struct(json: object): __Table__;
}
export declare type TableModel = typeof __Table__;
export declare function Table(name: string, primary: string): TableModel;
export declare const Column: {
    BIGINT(model: any, key: any): void;
    BOOL(model: any, key: any): void;
    DOUBLE(model: any, key: any): void;
    JSON(model: any, key: any): void;
    VARCHAR(n: number): (model: any, key: any) => void;
    UUID(model: any, key: any): void;
    TEXT(model: any, key: any): void;
    TIMESTAMP(model: any, key: any): void;
};
