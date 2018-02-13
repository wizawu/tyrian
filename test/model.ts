import { assert } from "chai"
import { beforeEach, describe, it, report } from "lightest"

import { Parser, Collate, Engine, Model, Client } from "../src/index"

describe("Model", () => {
    class User extends Model {
        id = this.UUID()
        countryCode = this.VARCHAR(4)
        phoneNumber = this.VARCHAR(20)
        email = this.VARCHAR(64)
        name = this.TEXT()
        position = this.TEXT()
    }

    let client = new Client({
        host: "127.0.0.1",
        port: 3306,
        database: "test",
        user: "root",
        password: "",
        useSSL: false,
    })
    let userTable: User

    beforeEach(() => {
        client.db.execute("DROP TABLE IF EXISTS user")
        userTable = new User({
            client: client,
            table: "user",
            primary: "id",
            engine: Engine.MYISAM,
            collate: Collate.utf8_bin,
            index: [["email"]],
            unique: [["countryCode", "phoneNumber"]],
            fulltext: [[Parser.ngram, "name", "position"]],
        })
        userTable.generateTable()
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
        let result = client.queryForObject(
            "SELECT * FROM information_schema.tables WHERE table_schema = ? AND table_name = ?",
            ["test", "user"]
        )
        assert.strictEqual(result.ENGINE.toUpperCase(), Engine.MYISAM)
        assert.strictEqual(result.TABLE_COLLATION, Collate.utf8_bin)

        result = client.query("SHOW INDEXES FROM user")
        assert.includeMembers(
            result.map(r => r.Key_name),
            [
                "user_idx_email",
                "user_uidx_countryCode_phoneNumber",
                "user_ft_name_position",
            ]
        )
    })

    it("get/insert", () => {
        client.execute("ALTER TABLE user ADD COLUMN phone TEXT")
        userTable.insert({ name: "wizawu", phone: "10086" })
        let user = userTable.get({ name: "wizawu" }) as User
        assert.isNotEmpty(user.id)
        assert.strictEqual(user.name, "wizawu")
        assert.isUndefined((user as any).phone)
    })

    it("upsert", () => {
        userTable.insert({ email: "wizawu@gmail.com" })
        let user = userTable.get({}) as User
        userTable.upsert({ id: user.id, email: "wizawu@qq.com" })
        user = userTable.get({ id: user.id }) as User
        assert.strictEqual(user.email, "wizawu@qq.com")
    })

    it("list/batchInsert", () => {
        client.execute("ALTER TABLE user ADD COLUMN phone TEXT")
        userTable.batchInsert([
            { name: "wizawu", email: "wizawu@gmail.com", countryCode: "1" },
            { name: "wizawu", email: "wizawu@qq.com", countryCode: "86", phone: "10086" },
            { email: "wizawu@163.com" },
        ])
        let result = userTable.list({ name: "wizawu" }) as User[]
        assert.strictEqual(result.length, 2)
        assert.strictEqual(result[0].name, "wizawu")
        assert.strictEqual(result[0].email, "wizawu@gmail.com")
        assert.strictEqual(result[0].countryCode, "1")
        assert.strictEqual(result[1].name, "wizawu")
        assert.strictEqual(result[1].email, "wizawu@qq.com")
        assert.strictEqual(result[1].countryCode, "86")
        assert.isUndefined((result[1] as any).phone)
    })

    it("batchUpsert", () => {
        userTable.batchUpsert([
            { id: "1", email: "wizawu@gmail.com", countryCode: "1" },
            { id: "2", email: "wizawu@qq.com", countryCode: "86" },
        ])
        let result = userTable.list({}) as User[]
        assert.strictEqual(result.length, 2)
        userTable.batchUpsert([
            { id: "1", email: "wizawu@163.com", countryCode: "1" },
            { id: "2", email: "wizawu@163.com", countryCode: "86" },
        ])
        result = userTable.list({}) as User[]
        assert.strictEqual(result.length, 2)
        assert.strictEqual(result[0].email, "wizawu@163.com")
        assert.strictEqual(result[1].email, "wizawu@163.com")
    })

    it("delete", () => {
        userTable.batchInsert([
            { name: "wizawu", email: "wizawu@gmail.com", countryCode: "1" },
            { name: "wizawu", email: "wizawu@qq.com", countryCode: "86", phone: "10086" },
            { email: "wizawu@163.com" },
        ])
        try {
            userTable.delete({})
            assert.fail()
        } catch (e) {
        }
        userTable.delete({ name: "wizawu" })
        let result = userTable.list({}) as User[]
        assert.strictEqual(result.length, 1)
        assert.strictEqual(result[0].email, "wizawu@163.com")
    })
})

echo(report.toString())
assert.isOk(report.ok())
