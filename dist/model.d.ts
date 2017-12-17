export declare const BIGINT = "BIGINT";
export declare const BOOL = "BOOL";
export declare const DOUBLE = "DOUBLE";
export declare const TEXT = "TEXT";
export declare const VARCHAR: (length: number) => string;
export declare abstract class Model {
    protected ARRAY(): never[];
    protected BOOLEAN(): boolean;
    protected NUMBER(): number;
    protected OBJECT(): any;
    protected STRING(): string;
    from(json: object): Model;
}
export declare const rowMapper: any;
