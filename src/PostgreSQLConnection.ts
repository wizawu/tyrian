import JDBCConnection from "./JDBCConnection"
import { Options } from "./ConnectionImpl"

export default class PostgreSQLConnection extends JDBCConnection {
    constructor(options: Options) {
        super()
        this.driver = new org.postgresql.Driver()
        this.url = java.lang.String.format(
            "jdbc:postgresql://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
            options.host, options.port, options.database, options.user, options.password
        )
        this.connect()
    }
}