import { assert } from "chai"
import { beforeEach, describe, it, report } from "lightest"

import { Collate, Engine, Client, Table, Column } from "../src/mysql"

describe("Table", () => {
    class User extends Table({ name: "user", primary: "id", engine: Engine.MYISAM, collate: Collate.utf8_bin }) {
        @Column.UUID
        id
        @Column.VARCHAR(4)
        countryCode
        @Column.VARCHAR(20)
        phoneNumber
        @Column.VARCHAR(64)
        email
        @Column.TEXT
        name
        @Column.TEXT
        position
    }

    let client = new Client({
        host: "127.0.0.1",
        port: 3306,
        database: "test",
        user: "root",
        password: "",
        useSSL: false,
    })

    beforeEach(() => {
        client.db.execute("DROP TABLE IF EXISTS user")
        User.setClient(client).ensureTable()
        User.ensureIndex(["email"])
        User.ensureUniqueIndex(["countryCode", "phoneNumber"])
        User.ensureFullTextIndex(["name", "position"])
    })

    it("extends", () => {
        class User extends Table({ name: "user", primary: "id" }) {
            @Column.BIGINT
            a
            @Column.BOOL
            b
            @Column.DOUBLE
            c
            @Column.JSON
            d
            @Column.TEXT
            e
            @Column.TIMESTAMP
            f
            @Column.UUID
            g
            @Column.VARCHAR(64)
            h
        }
        assert.strictEqual(User.TABLE_NAME, "user")

        let user = new User()
        assert.strictEqual(user.a, 0)
        assert.strictEqual(user.b, false)
        assert.strictEqual(user.c, 0)
        assert.strictEqual(user.d, null)
        assert.strictEqual(user.e, "")
        assert.isNumber(user.f)
        assert.isString(user.g)
        assert.strictEqual(user.h, "")
        assert.notEqual(user.g, new User().g)
    })

    it("ensureTable/ensureIndex", () => {
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
                "user_ftidx_name_position",
            ]
        )
    })

    it("get/insert", () => {
        client.execute("ALTER TABLE user ADD COLUMN phone TEXT")
        User.insert(User.struct({ name: "wizawu", phone: "10086" }))
        let user = User.get({ name: "wizawu" }) as User
        assert.isNotEmpty(user.id)
        assert.strictEqual(user.name, "wizawu")
        assert.isUndefined((user as any).phone)

        user = User.get({ name: "anonymous" }) as User
        assert.strictEqual(user, null)
    })

    it("upsert", () => {
        User.insert(User.struct({ email: "wizawu@gmail.com" }))
        let user = User.get({}) as User
        User.upsert(User.struct({ id: user.id, email: "wizawu@qq.com" }))
        user = User.get({ id: user.id }) as User
        assert.strictEqual(user.email, "wizawu@qq.com")
    })

    it("list/batchInsert", () => {
        client.execute("ALTER TABLE user ADD COLUMN phone TEXT")
        User.batchInsert([
            { name: "wizawu", email: "wizawu@gmail.com", countryCode: "1" },
            { name: "wizawu", email: "wizawu@qq.com", countryCode: "86", phone: "10086" },
            { email: "wizawu@163.com" },
        ])
        let result = User.list({ name: "wizawu" }) as User[]
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
        User.batchUpsert([
            { id: "1", email: "wizawu@gmail.com", countryCode: "1" },
            { id: "2", email: "wizawu@qq.com", countryCode: "86" },
        ])
        let result = User.list({}) as User[]
        assert.strictEqual(result.length, 2)
        User.batchUpsert([
            { id: "1", email: "wizawu@163.com", countryCode: "1" },
            { id: "2", email: "wizawu@163.com", countryCode: "86" },
        ])
        result = User.list({}) as User[]
        assert.strictEqual(result.length, 2)
        assert.strictEqual(result[0].email, "wizawu@163.com")
        assert.strictEqual(result[1].email, "wizawu@163.com")
    })

    it("delete", () => {
        User.batchInsert([
            { name: "wizawu", email: "wizawu@gmail.com", countryCode: "1" },
            { name: "wizawu", email: "wizawu@qq.com", countryCode: "86", phone: "10086" },
            { email: "wizawu@163.com" },
        ])
        try {
            User.delete({})
            assert.fail()
        } catch (e) {
        }
        User.delete({ name: "wizawu" })
        let result = User.list({}) as User[]
        assert.strictEqual(result.length, 1)
        assert.strictEqual(result[0].email, "wizawu@163.com")
    })
})

echo(report.toString())
assert.isOk(report.ok())
