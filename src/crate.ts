import { JDBCClient } from "./jdbc"
import { Options } from "./client"

export class CrateClient extends JDBCClient {
    private driver = new io.crate.client.jdbc.CrateDriver()

    constructor(options: Options) {
        super()
        this.cache = net.sf.ehcache.CacheManager.create()
        let { hosts, host, port } = options
        this.SQL_UNIX_TIMESTAMP = "current_timestamp * 1000"
        if (hosts !== undefined) {
            this.url = `jdbc:crate://${hosts.map(h => h.host + ":" + h.port).join(",")}/`
        } else {
            this.url = `jdbc:crate://${host}:${port}/`
        }
        this.connect()
    }

    protected connect() {
        this.connection = this.driver.connect(this.url, new java.util.Properties())
    }
}
