export interface Options {
    server: string;
    port: int;
    database: string;
    user: string;
    password: string;
}
interface ConnectionImpl {
    ensureTable(tableName: string): any;
    ensureColumn(tableName: string, columnName: string, columnType: string): any;
    ensureIndex(tableName: string, columnNames: string[]): any;
    ensureUniqueIndex(tableName: string, columnNames: string[]): any;
    one<T>(sql: string, parameters: any[]): T | null;
    list<T>(sql: string, parameters: any[]): T[];
    save(tableName: string, obj: any, primary: string): any;
    execute(sql: string, parameters: any[]): any;
    close(): any;
}
export default ConnectionImpl;
