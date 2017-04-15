import JDBCConnection from "./JDBCConnection"
import { Options } from "./ConnectionImpl"

export default class MariaDBConnection extends JDBCConnection {
    constructor(options: Options) {
        super()
        this.driver = new org.mariadb.jdbc.Driver()
        this.url = java.lang.String.format(
            "jdbc:mariadb://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
            options.host, options.port, options.database, options.user, options.password
        )
        this.connect()
    }
}