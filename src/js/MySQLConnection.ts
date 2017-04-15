import JDBCConnection from "./JDBCConnection"
import { Options } from "./ConnectionImpl"

export default class MySQLConnection extends JDBCConnection {
    constructor(options: Options) {
        super()
        this.driver = new com.mysql.cj.jdbc.Driver()
        this.url = java.lang.String.format(
            "jdbc:mysql://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
            options.host, options.port, options.database, options.user, options.password
        )
        this.connect()
    }
}