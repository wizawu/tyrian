import { assert } from "chai"
import { beforeEach, describe, it, report } from "lightest"

import { Collate, Engine, Model, Client } from "../src/index"

describe("Model", () => {
    let client = new Client({
        host: "127.0.0.1",
        port: 3306,
        database: "test",
        user: "root",
        password: "",
        useSSL: false,
    })

    beforeEach(() => {
        client.execute("DROP TABLE IF EXISTS user")
    })

    it("extends", () => {
        class User extends Model {
            a = this.BIGINT()
            b = this.BOOL()
            c = this.DOUBLE()
            d = this.JSON()
            e = this.TEXT()
            f = this.TIMESTAMP()
            g = this.UUID()
            h = this.VARCHAR(64)
        }

        let user = new User({
            client: client,
            table: "user",
            primary: "id",
        })
        assert.strictEqual(user.a as any, "BIGINT")
        assert.strictEqual(user.b as any, "BOOL")
        assert.strictEqual(user.c as any, "DOUBLE")
        assert.strictEqual(user.d as any, "JSON")
        assert.strictEqual(user.e as any, "TEXT")
        assert.strictEqual(user.f as any, "BIGINT")
        assert.strictEqual(user.g as any, "VARCHAR(40)")
        assert.strictEqual(user.h as any, "VARCHAR(64)")

        user = new User()
        assert.strictEqual(user.a, 0)
        assert.strictEqual(user.b, false)
        assert.strictEqual(user.c, 0)
        assert.strictEqual(user.d, null)
        assert.strictEqual(user.e, "")
        assert.isNumber(user.f)
        assert.isString(user.g)
        assert.strictEqual(user.h, "")
    })

    it("generateTable", () => {
        class User extends Model {
            id = this.UUID()
            countryCode = this.VARCHAR(4)
            phoneNumber = this.VARCHAR(20)
            email = this.VARCHAR(64)
            name = this.TEXT()
            position = this.TEXT()
        }

        new User({
            client: client,
            table: "user",
            primary: "id",
            engine: Engine.MYISAM,
            collate: Collate.utf8_bin,
            index: [["email"]],
            unique: [["countryCode", "phoneNumber"]],
            fulltext: [["name", "position"]],
        }).generateTable()
    })
})

echo(report.toString())
assert.isOk(report.ok())
