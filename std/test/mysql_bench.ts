import lorem from "lorem-ipsum"
import { assert } from "chai"
import { describe, it, beforeEach, report } from "lightest"

import { Client, Table, Column, Engine, Collate } from "../src/mysql"

const logger = java.lang.System.err

const table = "test"

class Thesis extends Table(table, "id") {
    @Column.UUID
    id
    @Column.TEXT
    content
}

describe("Benchmark", () => {
    let client: Client

    beforeEach(() => {
        client = new Client({
            host: "127.0.0.1",
            port: 3306,
            database: "test",
            user: "root",
            password: "",
            useSSL: false,
        })
        Thesis.setClient(client)
    })

    it(Engine.INNODB, () => {
        client.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ engine: Engine.INNODB })
        for (let i = 0; i < 100; i++) {
            Thesis.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.INNODB + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ engine: Engine.INNODB })
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        Thesis.batchInsert(theses)
    })

    it(Engine.INNODB + " FULLTEXT", () => {
        Thesis.ensureFullTextIndex(["content"])
        for (let i = 0; i < 100; i++) {
            let rows = client.query(`
                SELECT * FROM ${table} WHERE (MATCH(content) AGAINST('lorem' IN BOOLEAN MODE)) > 0
            `)
            assert.isAtLeast(rows.length, 0)
        }
    })

    it(Engine.MYISAM, () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ engine: Engine.MYISAM })
        for (let i = 0; i < 100; i++) {
            Thesis.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.MYISAM + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ engine: Engine.MYISAM })
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        Thesis.batchInsert(theses)
    })

    it(Engine.MYISAM + " FULLTEXT", () => {
        Thesis.ensureFullTextIndex(["content"])
        for (let i = 0; i < 100; i++) {
            let rows = client.query(`
                SELECT * FROM ${table} WHERE (MATCH(content) AGAINST('lorem' IN BOOLEAN MODE)) > 0
            `)
            assert.isAtLeast(rows.length, 0)
        }
    })

    it(Engine.ROCKSDB, () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ engine: Engine.ROCKSDB, collate: Collate.utf8_bin })
        for (let i = 0; i < 100; i++) {
            Thesis.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.ROCKSDB + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ engine: Engine.ROCKSDB, collate: Collate.utf8_bin })
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        Thesis.batchInsert(theses)
    })
})

assert.isOk(report.ok())
logger.print(report.toString())
