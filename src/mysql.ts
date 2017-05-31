import { JDBCClient } from "./jdbc"
import { Options } from "./client"

export class MySQLClient extends JDBCClient {
    constructor(options: Options) {
        super()

        let { host, port, database, user, password } = options
        this.driver = new com.mysql.cj.jdbc.Driver()
        this.SQL_UNIX_TIMESTAMP = "floor(unix_timestamp(current_timestamp(6)) * 1000000)"

        this.url = `jdbc:mysql://${host}:${port}/${database}?user=${user}&password=${password}`
        this.url += `&characterEncoding=${options.characterEncoding || "UTF-8"}`
        if (options.autoReconnect !== undefined) {
            this.url += `&autoReconnect=${options.autoReconnect}`
        }
        if (options.testOnBorrow !== undefined) {
            this.url += `&testOnBorrow=${options.testOnBorrow}`
        }
        if (options.useSSL !== undefined) {
            this.url += `&useSSL=${options.useSSL}`
        }

        this.connect()
    }
}
