import ConnectionImpl, { Options } from "./ConnectionImpl";
export declare abstract class MySQLConnectionImpl implements ConnectionImpl {
    connection: java.sql.Connection;
    driver: java.sql.Driver;
    url: string;
    private prepareStatement(sql, parameters);
    private indexName(columnNames, unique);
    connect(): void;
    ensureTable(tableName: string): void;
    ensureColumn(tableName: string, columnName: string, columnType: string): void;
    ensureIndex(tableName: string, columnNames: string[]): void;
    ensureUniqueIndex(tableName: string, columnNames: string[]): void;
    one<T>(sql: string, parameters: any[]): T | null;
    list<T>(sql: string, parameters: any[]): T[];
    save(tableName: string, obj: any, primary: string): void;
    execute(sql: string, parameters: any[]): void;
    close(): void;
}
export default class MySQLConnection extends MySQLConnectionImpl {
    constructor(options: Options);
}
