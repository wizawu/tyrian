import { MySQLConnectionImpl } from "./MySQLConnection"
import { Options } from "./ConnectionImpl"

const DriverManager = java.sql.DriverManager
const String = java.lang.String

export default class MariaDBConnection extends MySQLConnectionImpl {
    constructor(options: Options) {
        super()
        this.url = String.format(
            "jdbc:mariadb://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
            options.server, options.port, options.database, options.user, options.password
        )
        this.connection = DriverManager.getConnection(this.url)
    }
}