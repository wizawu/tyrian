import { assert } from "chai"
import { describe, it, before, after, beforeEach, afterEach, report } from "lightest"
import { JDBCClient, MySQLClient } from "../src/index"

const String = java.lang.String
const logger = java.lang.System.err

describe("MySQLClient", () => {
    let client: JDBCClient
    let bucket = "bucket"
    let table = "bucket"

    beforeEach(() => {
        client = new MySQLClient({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "",
            useSSL: false,
            defaultEngine: "MyISAM",
        })
        client.execute(`DROP TABLE IF EXISTS ${bucket}`)
        client.execute(`DROP TABLE IF EXISTS ${table}`)
    })

    afterEach(() => {
        client.close()
    })

    it("setInt", () => {
        client.setInt(bucket, "x", 1)
        assert.strictEqual(client.get(bucket, "x"), 1)
        assert.strictEqual(client.get(bucket, "y"), null)
    })

    it("setFloat", () => {
        client.setFloat(bucket, "x", 3.14)
        assert.strictEqual(client.get(bucket, "x"), 3.14)
        assert.strictEqual(client.get(bucket, "y"), null)
    })

    it("setString", () => {
        client.setString(bucket, "x", "text")
        assert.strictEqual(client.get(bucket, "x"), "text")
        assert.strictEqual(client.get(bucket, "y"), null)
    })

    it("setJSON", () => {
        client.setJSON(bucket, "x", { value: 1 })
        assert.strictEqual(
            JSON.stringify(client.get(bucket, "x")),
            JSON.stringify({ value: 1 })
        )
        assert.strictEqual(client.get(bucket, "y"), null)
    })

    it("setBlob", () => {
        client.setBlob(bucket, "x", new String("zxcv").getBytes())
        assert.strictEqual<any>(new String(client.get(bucket, "x") as any), "zxcv")
        assert.strictEqual(client.get(bucket, "y"), null)
    })

    it("expire", () => {
        client.setInt(bucket, "x", 1, 1)
        assert.strictEqual(client.get(bucket, "x"), 1)
        java.lang.Thread.sleep(500)
        assert.strictEqual(client.get(bucket, "x"), 1)
        java.lang.Thread.sleep(500)
        assert.strictEqual(client.get(bucket, "x"), null)

        client.setInt(bucket, "y", 2, 2)
        assert.strictEqual(client.get(bucket, "y"), 2)
        client.setInt(bucket, "y", 2, 1)
        java.lang.Thread.sleep(500)
        assert.strictEqual(client.get(bucket, "y"), 2)
        java.lang.Thread.sleep(500)
        assert.strictEqual(client.get(bucket, "y"), null)
    })

    it("type override", () => {
        client.setInt(bucket, "x", 1)
        assert.strictEqual(client.get(bucket, "x"), 1)
        client.setString(bucket, "x", "text")
        assert.strictEqual(client.get(bucket, "x"), "text")
    })

    it("ensureTable", () => {
        client.ensureTable(table, "id", "INT")
        let tables = client.list(`SHOW TABLES`) as any[]
        assert.strictEqual(tables.some(t => t.TABLE_NAME === table), true)
        let index = client.list(`SHOW INDEX FROM ${table}`)[0] as any
        assert.strictEqual(index.INDEX_NAME, "PRIMARY")
        assert.strictEqual(index.COLUMN_NAME, "id")
    })

    it("ensureColumn", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "TEXT")
        let columns = client.list(`SHOW COLUMNS FROM ${table}`) as any[]
        assert.strictEqual(columns.some(c =>
            c.COLUMN_NAME === "path" &&
            c.COLUMN_TYPE === "text"
        ), true)
    })

    it("ensureIndex", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "VARCHAR(16)")
        client.ensureIndex(table, ["id", "path"])
        let indexes = client.list(`SHOW INDEX FROM ${table}`) as any[]
        assert.strictEqual(indexes.some(c =>
            c.INDEX_NAME === `${table}_idx_id_path` &&
            c.NON_UNIQUE === 1
        ), true)
    })

    it("ensureUniqueIndex", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "VARCHAR(16)")
        client.ensureUniqueIndex(table, ["id", "path"])
        let indexes = client.list(`SHOW INDEX FROM ${table}`) as any[]
        assert.strictEqual(indexes.some(c =>
            c.INDEX_NAME === `${table}_uidx_id_path` &&
            c.NON_UNIQUE === 0
        ), true)
    })

    it("one", () => {
        client.ensureTable(table, "id", "INT")
        client.insert(table, { id: 1 })
        assert.strictEqual(
            JSON.stringify(client.one(`SELECT * FROM ${table}`)),
            JSON.stringify({ id: 1 })
        )
        assert.strictEqual(client.one(`SELECT * FROM ${table} WHERE id = 0`), null)
    })

    it("list", () => {
        client.ensureTable(table, "id", "INT")
        client.insert(table, { id: 1 })
        client.insert(table, { id: 2 })
        let rows = client.list(`SELECT * FROM ${table}`) as any[]
        assert.strictEqual(rows.length, 2)
        assert.strictEqual(rows[0].id, 1)
        assert.strictEqual(rows[1].id, 2)
    })

    it("insert", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "value", "TEXT")
        client.insert(table, { id: 1, value: "a" })
        let rows = client.list(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 1)
        client.insert(table, { id: 2, value: "b" })
        rows = client.list(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 2)
        try {
            client.insert(table, { id: 1, value: "c" })
            throw "should not insert"
        } catch (ex) {
            assert.isString(ex.message)
        } finally {
            assert.strictEqual(rows.length, 2)
            assert.strictEqual(client.one<any>(`SELECT * FROM ${table} WHERE id = 1`).value, "a")
        }
    })

    it("upsert", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "TEXT")
        client.insert(table, { id: 1, path: "/" })
        let rows = client.list<any>(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 1)
        assert.strictEqual(rows[0].id, 1)
        assert.strictEqual(rows[0].path, "/")
        client.upsert(table, { id: 1, path: "/root" })
        rows = client.list<any>(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 1)
        assert.strictEqual(rows[0].id, 1)
        assert.strictEqual(rows[0].path, "/root")
        client.upsert(table, { id: 2, path: "/home" })
        rows = client.list<any>(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 2)
        assert.strictEqual(rows.some(r => r.id === 1 && r.path === "/root"), true)
        assert.strictEqual(rows.some(r => r.id === 2 && r.path === "/home"), true)
    })

    it("json array", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "list", "JSON")
        client.insert(table, { id: 1, list: [2, 3] })
        assert.strictEqual(client.one<any>(`SELECT json_contains(list, '2') ok from ${table}`).ok, 1)
        assert.strictEqual(client.one<any>(`SELECT json_contains(list, '4') ok from ${table}`).ok, 0)
    })

    it("execute", () => {
        client.ensureTable(table, "id", "INT")
        let tables = client.list<any>("SHOW TABLES")
        assert.strictEqual(tables.some(t => t.TABLE_NAME === table), true)
        client.execute(`DROP TABLE ${table}`)
        tables = client.list<any>("SHOW TABLES")
        assert.strictEqual(tables.every(t => t.TABLE_NAME !== table), true)
    })

    it("delete", () => {
        client.ensureTable(table, "id", "INT")
        client.insert(table, { id: 1 })
        assert.strictEqual(client.list(`SELECT * FROM ${table}`).length, 1)
        client.delete(table, 1)
        assert.strictEqual(client.list(`SELECT * FROM ${table}`).length, 0)

        client.execute(`DROP TABLE ${table}`)
        client.setInt(bucket, "x", 1)
        assert.strictEqual(client.get(bucket, "x"), 1)
        client.delete(bucket, "x")
        assert.strictEqual(client.get(bucket, "x"), null)
    })

    it("close", () => {
        client.close()
        try {
            client.execute("SELECT now()")
            throw "should not execute"
        } catch (ex) {
            assert.isString(ex.message)
        }
    })
})

describe("MySQLClient benchmark", () => {
    let client: JDBCClient
    let bucket = "bucket"
    let table = "bucket"

    before(() => {
        client = new MySQLClient({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "",
            useSSL: false,
            logger: "com.mysql.cj.core.log.Slf4JLogger",
            profileSQL: java.lang.System.getenv("PROFILE_SQL") === "true",
            defaultEngine: "MyISAM",
        })
        client.execute(`DROP TABLE IF EXISTS ${bucket}`)
        client.execute(`DROP TABLE IF EXISTS ${table}`)
        client.setString(bucket, "_", "_")
    })

    after(() => {
        client.close()
    })

    function batch(func: any) {
        for (let i = 0; i < 1000; i++) func(i)
    }

    it("setInt", () => {
        batch(i => client.setInt(bucket, "int" + i, i))
    })

    it("setFloat", () => {
        batch(i => client.setFloat(bucket, "float" + i, i))
    })

    it("setString", () => {
        batch(i => client.setString(bucket, "string" + i, "text" + i))
    })

    it("setJSON", () => {
        batch(i => client.setJSON(bucket, "json" + i, { value: i }))
    })

    it("setBlob", () => {
        batch(i => client.setBlob(bucket, "blob" + i, new String("zxcv" + i).getBytes()))
    })

    it("get", () => {
        batch(i => assert.strictEqual(client.get<any>(bucket, "json" + i).value, i))
    })

    it("delete", () => {
        batch(i => client.delete(bucket, "json" + i))
    })

    it("insert", () => {
        batch(i => client.insert(table, { key_: "insert" + i, int_: i }))
    })

    it("upsert", () => {
        batch(i => client.upsert(table, { key_: "upsert" + i, string_: "upsert" }))
    })

    it("one", () => {
        batch(i => {
            let row = client.one<any>(`SELECT * FROM ${table} WHERE key_ = ?`, ["insert" + i])
            assert.strictEqual(row.int_, i)
        })
    })

    it("list", () => {
        let rows = client.list<any>(`SELECT * FROM ${table} WHERE string_ = ?`, ["upsert"])
        assert.strictEqual(rows.length, 1000)
        assert.strictEqual(rows.every(row => row.string_ === "upsert"), true)
    })
})

logger.print(report.toString())
assert.isOk(report.ok())
