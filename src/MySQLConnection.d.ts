import IConnection from "./IConnection";
import { ConnectOptions } from "./IConnection";
export declare abstract class MySQLConnectionImpl implements IConnection {
    connection: java.sql.Connection;
    url: string;
    private prepareStatement(sql, parameters);
    private indexName(columnNames, unique);
    ensureTable(tableName: string): void;
    ensureColumn(tableName: string, columnName: string, columnType: string): void;
    ensureIndex(tableName: string, columnNames: string[]): void;
    ensureUniqueIndex(tableName: string, columnNames: string[]): void;
    one<T>(sql: string, parameters: any[]): T | null;
    list<T>(sql: string, parameters: any[]): T[];
    save(tableName: string, json: any, primary: string): void;
    execute(sql: string, parameters: any[]): void;
    close(): void;
}
export default class MySQLConnection extends MySQLConnectionImpl {
    constructor(options: ConnectOptions);
}
