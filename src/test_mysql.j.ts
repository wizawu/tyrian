import { assert } from "chai"
import { describe, it, before, after, beforeEach, report } from "lightest"
import { JDBCClient, MySQLClient } from "./index"

const String = java.lang.String
const logger = java.lang.System.err

describe("MySQLClient", () => {
    let client: JDBCClient
    let bucket = "bucket"
    let table = "bucket"

    before(() => {
        client = new MySQLClient({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "venividivici",
            useSSL: false,
        })
    })

    after(() => {
        client.close()
    })

    beforeEach(() => {
        try {
            client.execute(`DROP TABLE ${table}`)
        } catch (ex) {
        }
    })

    it("getInt/setInt", () => {
        client.setInt(bucket, "x", 1)
        assert.strictEqual(client.getInt(bucket, "x"), 1)
        assert.strictEqual(client.getInt(bucket, "y"), null)
    })

    it("getFloat/setFloat", () => {
        client.setFloat(bucket, "x", 3.14)
        assert.strictEqual(client.getFloat(bucket, "x"), 3.14)
        assert.strictEqual(client.getFloat(bucket, "y"), null)
    })

    it("getString/setString", () => {
        client.setString(bucket, "x", "text")
        assert.strictEqual(client.getString(bucket, "x"), "text")
        assert.strictEqual(client.getString(bucket, "y"), null)
    })

    it("getJSON/setJSON", () => {
        client.setJSON(bucket, "x", { value: 1 })
        assert.strictEqual(
            JSON.stringify(client.getJSON(bucket, "x")),
            JSON.stringify({ value: 1 })
        )
        assert.strictEqual(client.getJSON(bucket, "y"), null)
    })

    it("fetch/put", () => {
        client.put(bucket, "x", new String("zxcv").getBytes())
        assert.strictEqual<any>(new String(client.fetch(bucket, "x") as byte[]), "zxcv")
        assert.strictEqual(client.fetch(bucket, "y"), null)
    })

    it("expire", () => {
        client.setInt(bucket, "x", 1, 2)
        assert.strictEqual(client.getInt(bucket, "x"), 1)
        java.lang.Thread.sleep(1000)
        assert.strictEqual(client.getInt(bucket, "x"), 1)
        java.lang.Thread.sleep(1000)
        assert.strictEqual(client.getInt(bucket, "x"), null)
    })

    it("override", () => {
        client.setInt(bucket, "x", 1)
        assert.strictEqual(client.getInt(bucket, "x"), 1)
        client.setFloat(bucket, "x", 3.14)
        assert.strictEqual(client.getFloat(bucket, "x"), 3.14)
    })

    it("ensureTable", () => {
        client.ensureTable(table, "id", "INT")
        let tables = client.list<any>(`SHOW TABLES`)
        assert.strictEqual(tables.some(t => t.TABLE_NAME === table), true)
        let index = client.list<any>(`SHOW INDEX FROM ${table}`)[0]
        assert.strictEqual(index.INDEX_NAME, "PRIMARY")
        assert.strictEqual(index.COLUMN_NAME, "id")
    })

    it("ensureColumn", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "TEXT")
        let columns = client.list<any>(`SHOW COLUMNS FROM ${table}`)
        assert.strictEqual(columns.some(c => c.COLUMN_NAME === "path"), true)
        assert.strictEqual(columns.some(c => c.COLUMN_TYPE === "text"), true)
    })

    it("ensureIndex", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "VARCHAR(16)")
        client.ensureIndex(table, ["id", "path"])
        let indexes = client.list<any>(`SHOW INDEX FROM ${table}`)
        assert.strictEqual(indexes.some(c =>
            c.INDEX_NAME === `${table}_idx_id_path` &&
            c.NON_UNIQUE === 1
        ), true)
    })

    it("ensureUniqueIndex", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "VARCHAR(16)")
        client.ensureUniqueIndex(table, ["id", "path"])
        let indexes = client.list<any>(`SHOW INDEX FROM ${table}`)
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
        let rows = client.list<any>(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 2)
        assert.strictEqual(rows[0].id, 1)
        assert.strictEqual(rows[1].id, 2)
    })

    it("insert", () => {
        client.ensureTable(table, "id", "INT")
        client.insert(table, { id: 1 })
        let rows = client.list<any>(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 1)
        client.insert(table, { id: 2 })
        rows = client.list<any>(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 2)
        try {
            client.insert(table, { id: 1 })
            throw "should not insert"
        } catch (ex) {
            assert.isString(ex.message)
        } finally {
            assert.strictEqual(rows.length, 2)
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
        assert.strictEqual(client.getInt(bucket, "x"), 1)
        client.delete(bucket, "x")
        assert.strictEqual(client.getInt(bucket, "x"), null)
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

logger.print(report.toString())
assert.isOk(report.ok())
