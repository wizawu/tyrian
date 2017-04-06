import { MySQLConnectionImpl } from "./MySQLConnection";
import { Options } from "./ConnectionImpl";
export default class MariaDBConnection extends MySQLConnectionImpl {
    constructor(options: Options);
}
