package orsql

import java.sql.DriverManager

class MariaDBConnection(options: ConnectOptions) : MySQLConnection(options) {
    init {
        url = String.format(
                "jdbc:mariadb://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
                options.server, options.port, options.database, options.user, options.password
        )
        connection = DriverManager.getConnection(url)
    }
}
