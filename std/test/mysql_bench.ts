import lorem from "lorem-ipsum"
import { assert } from "chai"
import { describe, it, beforeEach, report } from "lightest"

import { Client, Table, Column, Engine } from "../src/mysql"

const logger = java.lang.System.err

const table = "test"

class Thesis extends Table(table) {
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
            user: "admin",
            password: "",
            useSSL: false,
        })
        Thesis.setClient(client)
    })

    it(Engine.INNODB, () => {
        client.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ primary: ["id"], engine: Engine.INNODB })
        for (let i = 0; i < 100; i++) {
            Thesis.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.INNODB + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ primary: ["id"], engine: Engine.INNODB })
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        Thesis.batchInsert(theses)
    })

    it(Engine.INNODB + " FULLTEXT INDEX", () => {
        Thesis.ensureFullTextIndex(["content"])
    })

    it(Engine.INNODB + " FULLTEXT SEARCH", () => {
        for (let i = 0; i < 100; i++) {
            let rows = client.query(`
                SELECT * FROM ${table} WHERE (MATCH(content) AGAINST('lorem' IN BOOLEAN MODE)) > 0
            `)
            assert.isAtLeast(rows.length, 0)
        }
    })

    it(Engine.MYISAM, () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ primary: ["id"], engine: Engine.MYISAM })
        for (let i = 0; i < 100; i++) {
            Thesis.insert({ content: lorem({ count: 10 }) })
        }
    })

    it(Engine.MYISAM + " BATCH", () => {
        client.db.execute(`DROP TABLE IF EXISTS ${table}`)
        Thesis.ensureTable({ primary: ["id"], engine: Engine.MYISAM })
        let theses: any[] = []
        for (let i = 0; i < 100; i++) {
            theses.push({ content: lorem({ count: 10 }) })
        }
        Thesis.batchInsert(theses)
    })

    it(Engine.MYISAM + " FULLTEXT INDEX", () => {
        Thesis.ensureFullTextIndex(["content"])
    })

    it(Engine.MYISAM + " FULLTEXT SEARCH", () => {
        for (let i = 0; i < 100; i++) {
            let rows = client.query(`
                SELECT * FROM ${table} WHERE (MATCH(content) AGAINST('lorem' IN BOOLEAN MODE)) > 0
            `)
            assert.isAtLeast(rows.length, 0)
        }
    })
})

assert.isOk(report.ok())
logger.print(report.toString())
