export declare class ColumnType {
    static BIGINT: string;
    static BOOL: string;
    static DOUBLE: string;
    static JSON: string;
    static TEXT: string;
    static VARCHAR(length: number): string;
}
export declare abstract class Model {
    protected ARRAY(): never[];
    protected BOOLEAN(): boolean;
    protected NUMBER(): number;
    protected OBJECT(): any;
    protected STRING(): string;
    merge(json: object): Model;
}
export declare const rowMapper: any;
