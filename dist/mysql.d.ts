import { JDBCClient } from "./jdbc";
import { Options } from "./client";
export declare class MySQLClient extends JDBCClient {
    private driver;
    constructor(options: Options);
    protected connect(): void;
}
