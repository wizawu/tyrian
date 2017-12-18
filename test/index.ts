import { assert } from "chai"
import { describe, it, beforeEach, report, afterEach } from "lightest"
import { Client, Model, ColumnType, Engine } from "../src/index"

const logger = java.lang.System.err

class Row extends Model {
    id = this.NUMBER()
    value = this.STRING()
    list = this.ARRAY()
    map = this.OBJECT()
}

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
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        client.ensureTable(table, "id", ColumnType.BIGINT, Engine.MyISAM)
    })

    afterEach(() => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
    })

    it("ensureTable", () => {
        let tables = client.query(`SHOW TABLES LIKE ?`, [table])
        assert.strictEqual(1, tables.length)
        let index = client.query(`SHOW INDEX FROM ${table}`)[0]
        assert.strictEqual(index.Key_name, "PRIMARY")
        assert.strictEqual(index.Column_name, "id")
    })

    it("ensureColumn", () => {
        client.ensureColumn(table, "path", ColumnType.TEXT)
        let columns = client.query(`SHOW COLUMNS FROM ${table}`)
        assert.strictEqual(columns.some(c => c.Field === "path" && c.Type === "text"), true)
    })

    it("ensureIndex", () => {
        client.ensureColumn(table, "path", ColumnType.VARCHAR(16))
        client.ensureIndex(table, ["id", "path"])
        let indexes = client.query(`SHOW INDEX FROM ${table}`)
        assert.strictEqual(indexes.some(c => c.Key_name === `${table}_idx_id_path` && c.Non_unique), true)
    })

    it("ensureUniqueIndex", () => {
        client.ensureColumn(table, "path", ColumnType.VARCHAR(16))
        client.ensureUniqueIndex(table, ["id", "path"])
        let indexes = client.query(`SHOW INDEX FROM ${table}`)
        assert.strictEqual(indexes.some(c => c.Key_name === `${table}_uidx_id_path` && !c.Non_unique), true)
    })

    it("ensureFullText", () => {
        client.ensureColumn(table, "title", ColumnType.TEXT)
        client.ensureColumn(table, "content", ColumnType.TEXT)
        client.ensureFullText(table, ["title", "content"])
        client.db.update(`INSERT INTO ${table}(id,title,content) VALUES(1,'疑犯追踪','运用一套独特的办法制止犯罪的故事')`)
        client.db.update(`INSERT INTO ${table}(id,title,content) VALUES(2,'迷失','面对这种荒芜人烟的小岛')`)
        let results = client.query(`
            SELECT title FROM ${table} WHERE (MATCH(title, content) AGAINST ('故事' IN BOOLEAN MODE)) > 0
        `)
        assert.strictEqual(1, results.length)
        let result: any = client.queryForObject(`
            SELECT title FROM ${table} WHERE (MATCH(title, content) AGAINST ('人烟' IN BOOLEAN MODE)) > 0
        `)
        assert.strictEqual('迷失', result.title)
    })

    it("update", () => {
        client.ensureColumn(table, "value", ColumnType.TEXT)
        client.ensureColumn(table, "list", ColumnType.JSON)
        client.ensureColumn(table, "map", ColumnType.JSON)

        client.insert(table, new Row().from({ id: 1, value: "a" }))
        let row: Row = client.queryForObject(`SELECT * FROM ${table}`)
        assert.deepEqual("a", row.value)

        client.update(`UPDATE ${table} SET value = 'b'`)
        row = client.queryForObject(`SELECT * FROM ${table}`)
        assert.deepEqual("b", row.value)
    })

    it("insert", () => {
        client.ensureColumn(table, "value", ColumnType.TEXT)
        client.ensureColumn(table, "list", ColumnType.JSON)
        client.ensureColumn(table, "map", ColumnType.JSON)

        client.insert(table, new Row().from({ id: 1, value: "a" }))
        client.insert(table, new Row().from({ id: 2, value: "b" }))
        let rows = client.query(`SELECT * FROM ${table}`)
        assert.strictEqual(rows.length, 2)
        try {
            client.insert(table, new Row().from({ id: 1, value: "c" }))
            throw "should not insert"
        } catch (ex) {
            assert.isOk(/duplicate entry/i.test(ex.message))
        } finally {
            assert.strictEqual(rows.length, 2)
            assert.strictEqual(
                client.db.queryForMap(`SELECT * FROM ${table} WHERE id = 1`).get("value"),
                "a"
            )
            assert.strictEqual(
                client.db.queryForObject(`SELECT id FROM ${table} WHERE value = 'b'`, java.lang.Integer.class),
                2
            )
        }
    })

    it("upsert", () => {
        client.ensureColumn(table, "value", ColumnType.TEXT)
        client.ensureColumn(table, "list", ColumnType.JSON)
        client.ensureColumn(table, "map", ColumnType.JSON)

        client.insert(table, new Row().from({ id: 1, value: "a" }))
        let rows = client.query(`SELECT * FROM ${table}`)
        assert.deepEqual(1, rows[0].id)
        assert.deepEqual("a", rows[0].value)

        client.upsert(table, new Row().from({ id: 1, value: "b" }))
        rows = client.query(`SELECT * FROM ${table}`)
        assert.deepEqual(1, rows.length)
        assert.deepEqual(1, rows[0].id)
        assert.deepEqual("b", rows[0].value)
    })

    it("json", () => {
        client.ensureColumn(table, "value", ColumnType.TEXT)
        client.ensureColumn(table, "list", ColumnType.JSON)
        client.ensureColumn(table, "map", ColumnType.JSON)

        client.insert(table, new Row().from({ id: 1, list: [2, 3] }))
        assert.strictEqual(
            client.db.queryForObject(`SELECT json_contains(list, '2') FROM ${table}`, java.lang.Boolean.class),
            true
        )
        assert.strictEqual(
            client.db.queryForObject(`SELECT json_contains(list, '4') FROM ${table}`, java.lang.Boolean.class),
            false
        )

        client.insert(table, new Row().from({ id: 4, map: { value: [5, 6] } }))
        let row: any = client.queryForObject(`SELECT * FROM ${table} WHERE id = 4`)
        assert.strictEqual(row.id, 4)
        assert.strictEqual(row.map.value[0], 5)
        assert.strictEqual(row.map.value[1], 6)
    })
})

assert.isOk(report.ok())
logger.print(report.toString())
