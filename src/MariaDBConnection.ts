const DriverManager = java.sql.DriverManager
const String = java.lang.String
type Connection = java.sql.Connection
type PreparedStatement = java.sql.PreparedStatement

import { ConnectOptions } from "./IConnection"
import { MySQLConnectionImpl } from "./MySQLConnection"

export default class MariaDBConnection extends MySQLConnectionImpl {
    constructor(options: ConnectOptions) {
        super()
        this.url = String.format(
            "jdbc:mariadb://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
            options.server, options.port, options.database, options.user, options.password
        )
        this.connection = DriverManager.getConnection(this.url)
    }
}