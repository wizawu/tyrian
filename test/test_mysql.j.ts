import { assert } from "chai"
import { describe, it, afterEach, beforeEach, report } from "lightest"

import { JDBCClient, MySQLClient } from "../src/index"

describe("MySQLClient", () => {
    let client: JDBCClient

    beforeEach(() => {
        client = new MySQLClient({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "venividivici",
            useSSL: false,
        })
    })

    afterEach(() => {
        client.close()
    })

    it("chai", () => {
        assert.deepEqual(1 + 1, 1)
    })
})

java.lang.System.err.print(report.toString())
assert.isOk(report.ok())
