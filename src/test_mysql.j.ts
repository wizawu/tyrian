import { assert } from "chai"
import { describe, it, afterEach, beforeEach, report } from "lightest"
import { JDBCClient, MySQLClient } from "./index"

const logger = java.lang.System.err

describe("MySQLClient", () => {
    let client: JDBCClient
    let bucket = "bucket"

    beforeEach(() => {
        client = new MySQLClient({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "venividivici",
            useSSL: false,
        })
        try {
            client.execute(`DROP TABLE bucket`)
        } catch (ex) {
            logger.println(ex)
        }
        try {
            client.execute(`DROP TABLE player`)
        } catch (ex) {
            logger.println(ex)
        }
    })

    afterEach(() => {
        client.close()
    })

    it("getInt/setInt", () => {
        client.setInt(bucket, "x", 1)
        assert.deepEqual(client.getInt(bucket, "x"), 1)
        assert.deepEqual(client.getInt(bucket, "y"), null)
    })
})

logger.print(report.toString())
assert.isOk(report.ok())
