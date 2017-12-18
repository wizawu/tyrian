import * as lorem from "lorem-ipsum"
import * as uuid from "uuid/v4"
import { assert } from "chai"
import { describe, it, beforeEach, report } from "lightest"

import { Client, Model, ColumnType, Engine, Collate } from "../src/index"

const logger = java.lang.System.err

class Thesis extends Model {
    id = this.STRING()
    content = this.STRING()
}

describe("Benchmark", () => {
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
        client.$.innodb_flush_log_at_trx_commit(2)
    })

    it(Engine.INNODB, () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        client.ensureTable(table, "id", ColumnType.VARCHAR(64), Engine.INNODB)
        client.ensureColumn(table, "content", ColumnType.TEXT)
        for (let i = 0; i < 100; i++) {
            let thesis = new Thesis().from({
                id: uuid(),
                content: lorem({ count: 10 }),
            })
            client.insert(table, thesis)
        }
    })

    it(Engine.INNODB + " FULLTEXT", () => {
        client.ensureFullText(table, ["content"])
        for (let i = 0; i < 100; i++) {
            let rows = client.query(`
                SELECT * FROM ${table} WHERE (MATCH(content) AGAINST('lorem' IN BOOLEAN MODE)) > 0
            `)
            assert.isAtLeast(rows.length, 0)
        }
    })

    it(Engine.MYISAM, () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        client.ensureTable(table, "id", ColumnType.VARCHAR(64), Engine.MYISAM)
        client.ensureColumn(table, "content", ColumnType.TEXT)
        for (let i = 0; i < 100; i++) {
            let thesis = new Thesis().from({
                id: uuid(),
                content: lorem({ count: 10 }),
            })
            client.insert(table, thesis)
        }
    })

    it(Engine.MYISAM + " FULLTEXT", () => {
        client.ensureFullText(table, ["content"])
        for (let i = 0; i < 100; i++) {
            let rows = client.query(`
                SELECT * FROM ${table} WHERE (MATCH(content) AGAINST('lorem' IN BOOLEAN MODE)) > 0
            `)
            assert.isAtLeast(rows.length, 0)
        }
    })

    it(Engine.ROCKSDB, () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        client.ensureTable(table, "id", ColumnType.VARCHAR(64), Engine.ROCKSDB, Collate.utf8_bin)
        client.ensureColumn(table, "content", ColumnType.TEXT)
        for (let i = 0; i < 100; i++) {
            let thesis = new Thesis().from({
                id: uuid(),
                content: lorem({ count: 10 }),
            })
            client.insert(table, thesis)
        }
    })
})

assert.isOk(report.ok())
logger.print(report.toString())
