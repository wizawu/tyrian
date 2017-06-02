import { JDBCClient } from "./jdbc"
import { Options } from "./client"

export class MySQLClient extends JDBCClient {
    private driver = new com.mysql.cj.jdbc.Driver()

    constructor(options: Options) {
        super()
        this.cache = net.sf.ehcache.CacheManager.create()
        let { host, port, database, user, password } = options
        this.SQL_UNIX_TIMESTAMP = "floor(unix_timestamp(current_timestamp(6)) * 1000000)"
        this.url = `jdbc:mysql://${host}:${port}/${database}?user=${user}&password=${password}`
        this.url += `&characterEncoding=${options.characterEncoding || "UTF-8"}`
        if (options.autoReconnect !== undefined) {
            this.url += `&autoReconnect=${options.autoReconnect}`
        }
        if (options.logger !== undefined) {
            this.url += `&logger=${options.logger}`
        }
        if (options.profileSQL !== undefined) {
            this.url += `&profileSQL=${options.profileSQL}`
        }
        if (options.testOnBorrow !== undefined) {
            this.url += `&testOnBorrow=${options.testOnBorrow}`
        }
        if (options.useSSL !== undefined) {
            this.url += `&useSSL=${options.useSSL}`
        }
        this.connect()
    }

    protected connect() {
        this.connection = this.driver.connect(this.url, new java.util.Properties())
    }
}
