import * as uuid from "uuid"

import { Client } from "./client"
import { Collate, Engine } from "./constant"

export interface Options {
    collate?: Collate
    engine?: Engine
}

export declare class Model {
    static readonly TABLE_NAME: string
    static setClient(client: Client): typeof Model
    static ensureTable(options?: Options): typeof Model
    static ensureIndex(columns: string[]): typeof Model
    static ensureUniqueIndex(columns: string[]): typeof Model
    static ensureFullTextIndex(columns: string[]): typeof Model
    static get(query: object): Model | null
    static list(query: object): Model[]
    static delete(query: object): number
    static insert(row: object): number
    static upsert(row: object): number
    static batchInsert(rows: object[]): number[]
    static batchUpsert(rows: object[]): number[]
    static struct(json: object): Model
}

export type TableModel = typeof Model

export function Table(name: string): TableModel {
    class __Model__ {
        public static readonly TABLE_NAME = name
        private static columns = {}
        private static primary: string[] = []
        private static client: Client

        constructor() {
            Object.keys(__Model__.columns).forEach(key => {
                this[key] = __Model__.columns[key].init()
            })
        }

        protected setColumn(key: string, type: string, init: any) {
            __Model__.columns[key] = { key, type, init }
        }

        protected addPrimary(key: string) {
            __Model__.primary.push(key)
        }

        static setClient(client: Client) {
            this.client = client
            return this
        }

        static ensureTable(options?: Options) {
            this.client.execute(`
                CREATE TABLE IF NOT EXISTS ${this.TABLE_NAME} (
                    ${this.primary.map(key => key + " " + this.columns[key].type + ",").join("")}
                    PRIMARY KEY (${this.primary.join(",")})
                )
                ${options && options.collate ? " COLLATE " + options.collate : ""}
                ${options && options.engine ? " ENGINE " + options.engine : ""}
            `)
            Object.keys(this.columns).forEach(key => {
                this.client.ensureColumn(
                    this.TABLE_NAME,
                    key,
                    this.columns[key].type
                )
            })
            return this
        }

        static ensureIndex(columns: string[]) {
            this.client.ensureIndex(this.TABLE_NAME, columns)
            return this
        }

        static ensureUniqueIndex(columns: string[]) {
            this.client.ensureUniqueIndex(this.TABLE_NAME, columns)
            return this
        }

        static ensureFullTextIndex(columns: string[]) {
            this.client.ensureFullTextIndex(this.TABLE_NAME, columns)
            return this
        }

        static get(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            let row = this.client.queryForObject(sql, args)
            return row ? this.struct(row) : null
        }

        static list(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            return this.client.query(sql, args).map(row => this.struct(row))
        }

        static delete(query: object) {
            let { sql, args } = this.queryToSQL(`DELETE FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            if (args.length === 0) {
                throw "Cannot delete rows with an empty query"
            } else {
                return this.client.update(sql, args)
            }
        }

        static insert(row: object, options = { upsert: false }) {
            let model = this.struct(row)
            let keys = Object.keys(this.columns)
            return this.client.update(
                `${options.upsert ? "REPLACE" : "INSERT"} INTO
                    ${this.TABLE_NAME} (${keys.join(",")})
                    VALUES (${keys.map(() => "?").join(",")})
                `,
                keys.map(key => {
                    let value = model[key]
                    if (typeof value === "object") {
                        return value === null ? null : JSON.stringify(value)
                    } else {
                        return value
                    }
                })
            )
        }

        static upsert(row: object) {
            return this.insert(row, { upsert: true })
        }

        static batchInsert(rows: object[], options = { upsert: false }) {
            if (rows.length === 0) return
            let that = this
            let keys = Object.keys(this.columns)
            const BatchPreparedStatementSetter = Java.extend(
                Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"),
                {
                    setValues(preparedStatement, i) {
                        const model = that.struct(rows[i])
                        keys.forEach((key, j) => {
                            let value = model[key]
                            if (typeof value === "object") {
                                preparedStatement.setObject(j + 1, value === null ? null : JSON.stringify(value))
                            } else {
                                preparedStatement.setObject(j + 1, value)
                            }
                        })
                    },
                    getBatchSize() {
                        return rows.length
                    },
                }
            )
            return this.client.db.batchUpdate(
                `${options.upsert ? "REPLACE" : "INSERT"} INTO
                    ${this.TABLE_NAME} (${keys.join(",")})
                    VALUES (${keys.map(() => "?").join(",")})
                `,
                new BatchPreparedStatementSetter()
            )
        }

        static batchUpsert(rows: object[]) {
            return this.batchInsert(rows, { upsert: true })
        }

        static struct(json: object) {
            let model = new __Model__()
            Object.keys(__Model__.columns).forEach(key => {
                if (json && json[key] !== undefined) model[key] = json[key]
            })
            return model
        }

        private static queryToSQL(sql: string, query: object) {
            let args: any[] = []
            Object.keys(query).forEach(key => {
                sql += ` AND ${key} = ?`
                args.push(query[key])
            })
            return { sql, args }
        }
    }
    return __Model__ as any
}

export const Column = {
    PRIMARY(model, key) {
        model.addPrimary(key)
    },
    BIGINT(model, key) {
        model.setColumn(key, "BIGINT", () => 0)
    },
    BOOL(model, key) {
        model.setColumn(key, "BOOL", () => false)
    },
    DOUBLE(model, key) {
        model.setColumn(key, "DOUBLE", () => 0)
    },
    JSON(model, key) {
        model.setColumn(key, "JSON", () => null)
    },
    VARCHAR(n: number) {
        return function (model, key) {
            model.setColumn(key, `VARCHAR(${n})`, () => "")
        }
    },
    UUID(model, key) {
        model.setColumn(key, `VARCHAR(40)`, () => uuid.v4())
    },
    TEXT(model, key) {
        model.setColumn(key, "TEXT", () => "")
    },
    TIMESTAMP(model, key) {
        model.setColumn(key, "BIGINT", () => Date.now())
    },
}
