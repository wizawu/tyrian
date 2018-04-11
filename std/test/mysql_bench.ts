import lorem from "lorem-ipsum"
import { assert } from "chai"
import { describe, it, beforeEach, report } from "lightest"

import { Client, Model, Engine, Collate } from "../src/mysql"

const logger = java.lang.System.err

class Thesis extends Model {
    id = this.UUID()
    content = this.TEXT()
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
    })

    it(Engine.INNODB, () => {
        client.execute(`DROP TABLE IF EXISTS ${table}`)
        let thesisTable = new Thesis({
            client, table, primary: "id",
            engine: Engine.INNODB,
        })
        thesisTable.generateTable()
        for (let i = 0; i < 100; i++) {
            thesisTable.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.INNODB + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        let thesisTable = new Thesis({
            client, table, primary: "id",
            engine: Engine.INNODB,
        })
        thesisTable.generateTable()
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        thesisTable.batchInsert(theses)
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
        let thesisTable = new Thesis({
            client, table, primary: "id",
            engine: Engine.MYISAM
        })
        thesisTable.generateTable()
        for (let i = 0; i < 100; i++) {
            thesisTable.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.MYISAM + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        let thesisTable = new Thesis({
            client, table, primary: "id",
            engine: Engine.MYISAM,
        })
        thesisTable.generateTable()
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        thesisTable.batchInsert(theses)
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
        let thesisTable = new Thesis({
            client, table, primary: "id",
            engine: Engine.ROCKSDB,
            collate: Collate.utf8_bin,
        })
        thesisTable.generateTable()
        for (let i = 0; i < 100; i++) {
            thesisTable.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.ROCKSDB + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        let thesisTable = new Thesis({
            client, table, primary: "id",
            engine: Engine.ROCKSDB,
            collate: Collate.utf8_bin,
        })
        thesisTable.generateTable()
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        thesisTable.batchInsert(theses)
    })
})

assert.isOk(report.ok())
logger.print(report.toString())
