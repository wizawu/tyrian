import { JDBCClient } from "./jdbc"
import { Options } from "./client"

export class MySQLClient extends JDBCClient {
    private driver = new com.mysql.cj.jdbc.Driver()

    constructor(options: Options) {
        super()
        let { host, port, database, user, password, defaultEngine } = options
        this.SQL_UNIX_TIMESTAMP = "floor(unix_timestamp(current_timestamp(6)) * 1000000)"
        this.defaultEngine = defaultEngine ? `ENGINE = ${defaultEngine}` : ""
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
        if (options.rewriteBatchedStatements !== undefined) {
            this.url += `&rewriteBatchedStatements=${options.rewriteBatchedStatements}`
        }
        if (options.testOnBorrow !== undefined) {
            this.url += `&testOnBorrow=${options.testOnBorrow}`
        }
        if (options.useSSL !== undefined) {
            this.url += `&useSSL=${options.useSSL}`
        }
        if (options.useServerPrepStmts !== undefined) {
            this.url += `&useServerPrepStmts=${options.useServerPrepStmts}`
        }
        this.connect()

        this.WAIT_TIMEOUT = this.one<any>("SHOW VARIABLES LIKE 'wait_timeout'").Value * 1000
    }

    protected connect() {
        this.connection = this.driver.connect(this.url, new java.util.Properties())
        this.interactedAt = Date.now()
    }
}
