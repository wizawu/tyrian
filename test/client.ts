import { assert } from "chai"
import { describe, it, report } from "lightest"

import { Client } from "../src/index"

describe("Client", () => {
    it("new", () => {
        let client = new Client({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "",
            useSSL: false,
        })

        let now = client.db.queryForObject("SELECT TRIM(CURDATE())", java.lang.String.class)
        assert.isString(now)
    })
})

echo(report.toString())
assert.isOk(report.ok())
