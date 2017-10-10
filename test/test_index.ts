import { assert } from "chai"
import { describe, it, beforeEach, report } from "lightest"
import { Client, mapRow } from "../src/index"

const logger = java.lang.System.err

describe("Client", () => {
    let client: Client
    let table = "test"

    beforeEach(() => {
        client = new Client({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "",
            useSSL: false,
        })
        client.jdbcTemplate.execute(`DROP TABLE IF EXISTS ${table}`)
    })

    it("ensureTable", () => {
        client.ensureTable(table, "id", "INT")
        let tables = Java.from(client.jdbcTemplate.query(`SHOW TABLES`, mapRow))
        assert.strictEqual(tables.some(t => t.TABLE_NAME === table), true)
        let index = client.jdbcTemplate.query(`SHOW INDEX FROM ${table}`, mapRow)[0]
        assert.strictEqual(index.INDEX_NAME, "PRIMARY")
        assert.strictEqual(index.COLUMN_NAME, "id")
    })

    it("ensureColumn", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "TEXT")
        let columns = Java.from(client.jdbcTemplate.query(`SHOW COLUMNS FROM ${table}`, mapRow))
        assert.strictEqual(columns.some(c =>
            c.COLUMN_NAME === "path" &&
            c.COLUMN_TYPE === "text"
        ), true)
    })

    it("ensureIndex", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "VARCHAR(16)")
        client.ensureIndex(table, ["id", "path"])
        let indexes = Java.from(client.jdbcTemplate.query(`SHOW INDEX FROM ${table}`, mapRow))
        assert.strictEqual(indexes.some(c =>
            c.INDEX_NAME === `${table}_idx_id_path` &&
            c.NON_UNIQUE === 1
        ), true)
    })

    it("ensureUniqueIndex", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "VARCHAR(16)")
        client.ensureUniqueIndex(table, ["id", "path"])
        let indexes = Java.from(client.jdbcTemplate.query(`SHOW INDEX FROM ${table}`, mapRow))
        assert.strictEqual(indexes.some(c =>
            c.INDEX_NAME === `${table}_uidx_id_path` &&
            c.NON_UNIQUE === 0
        ), true)
    })

    it("insert", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "value", "TEXT")
        client.insert(table, { id: 1, value: "a" })
        let rows = Java.from(client.jdbcTemplate.query(`SELECT * FROM ${table}`, mapRow))
        assert.strictEqual(rows.length, 1)
        client.insert(table, { id: 2, value: "b" })
        rows = Java.from(client.jdbcTemplate.query(`SELECT * FROM ${table}`, mapRow))
        assert.strictEqual(rows.length, 2)
        try {
            client.insert(table, { id: 1, value: "c" })
            throw "should not insert"
        } catch (ex) {
            assert.isString(ex.message)
        } finally {
            assert.strictEqual(rows.length, 2)
            assert.strictEqual(
                client.jdbcTemplate.queryForMap(`SELECT * FROM ${table} WHERE id = 1`).get("value"),
                "a"
            )
            assert.strictEqual(
                client.jdbcTemplate.queryForObject(`SELECT id FROM ${table} WHERE value = 'b'`, (java.lang.Integer as any).class),
                2
            )
        }
    })

    it("upsert", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "path", "TEXT")
        client.insert(table, { id: 1, path: "/" })
        let rows = Java.from(client.jdbcTemplate.query(`SELECT * FROM ${table}`, mapRow))
        assert.strictEqual(rows.length, 1)
        assert.strictEqual(rows[0].id, 1)
        assert.strictEqual(rows[0].path, "/")
        client.upsert(table, { id: 1, path: "/root" })
        rows = Java.from(client.jdbcTemplate.query(`SELECT * FROM ${table}`, mapRow))
        assert.strictEqual(rows.length, 1)
        assert.strictEqual(rows[0].id, 1)
        assert.strictEqual(rows[0].path, "/root")
        client.upsert(table, { id: 2, path: "/home" })
        rows = Java.from(client.jdbcTemplate.query(`SELECT * FROM ${table}`, mapRow))
        assert.strictEqual(rows.length, 2)
        assert.strictEqual(rows.some(r => r.id === 1 && r.path === "/root"), true)
        assert.strictEqual(rows.some(r => r.id === 2 && r.path === "/home"), true)
    })

    it("json", () => {
        client.ensureTable(table, "id", "INT")
        client.ensureColumn(table, "list", "JSON")
        client.insert(table, { id: 1, list: [2, 3] })
        assert.strictEqual(
            client.jdbcTemplate.queryForObject(`SELECT json_contains(list, '2') FROM ${table}`, (java.lang.Boolean as any).class),
            true
        )
        assert.strictEqual(
            client.jdbcTemplate.queryForObject(`SELECT json_contains(list, '4') FROM ${table}`, (java.lang.Boolean as any).class),
            false
        )
        client.insert(table, { id: 4, list: { value: [5, 6] } })
        let row: any = client.jdbcTemplate.queryForObject(`SELECT * FROM ${table} WHERE id = 4`, mapRow)
        assert.strictEqual(row.id, 4)
        assert.strictEqual(row.list.value[0], 5)
        assert.strictEqual(row.list.value[1], 6)
    })
})

logger.print(report.toString())
assert.isOk(report.ok())
