import { Client } from "./client";
import { Collate, Engine, Parser } from "./constant";
export interface Options {
    client: Client;
    table: string;
    primary: string;
    engine?: Engine;
    collate?: Collate;
    index?: string[][];
    unique?: string[][];
    fulltext?: (Parser | string)[][];
}
export declare abstract class Model {
    protected BIGINT(): number;
    protected BOOL(): boolean;
    protected DOUBLE(): number;
    protected JSON(): null;
    protected VARCHAR(n: number): string;
    protected UUID(): string;
    protected TEXT(): string;
    protected TIMESTAMP(): number;
    private queryToSQL(sql, query);
    merge(row: object): this;
    getTableName(): string;
    generateTable(): void;
    get(query: object): object | null;
    list(query: object): object[];
    delete(query: object): void;
    insert(row: object, options?: any): void;
    upsert(row: object): void;
    batchInsert(rows: object[], options?: any): void;
    batchUpsert(rows: object[]): void;
    constructor(options?: Options);
}
