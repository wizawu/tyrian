import { ConnectOptions } from "./IConnection";
import { MySQLConnectionImpl } from "./MySQLConnection";
export default class MariaDBConnection extends MySQLConnectionImpl {
    constructor(options: ConnectOptions);
}
