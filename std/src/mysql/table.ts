import * as uuid from "uuid"

import { Client, TableOptions } from "./client"
import { Parser } from "./constant"

export function Table(name: string, primary: string) {
    class __Table__ {
        static readonly TABLE_NAME = name
        private static PRIMARY = primary
        private static columns = {}
        private static client: Client

        constructor() {
            Object.keys(__Table__.columns).forEach(key => {
                this[key] = __Table__.columns[key].init()
            })
        }

        protected setColumn(key: string, type: string, init: any) {
            __Table__.columns[key] = { key, type, init }
        }

        static setClient(client: Client) {
            this.client = client
            return this
        }

        static ensureTable(options?: TableOptions) {
            this.client.ensureTable(
                this.TABLE_NAME,
                this.PRIMARY,
                this.columns[this.PRIMARY].type,
                options
            )
            Object.keys(this.columns).forEach(key => {
                this.client.ensureColumn(
                    this.TABLE_NAME,
                    key,
                    this.columns[key].type
                )
            })
        }

        static ensureIndex(columns: string[]) {
            this.client.ensureIndex(this.TABLE_NAME, columns)
        }

        static ensureUniqueIndex(columns: string[]) {
            this.client.ensureUniqueIndex(this.TABLE_NAME, columns)
        }

        static ensureFullTextIndex(columns: string[], parser?: Parser) {
            this.client.ensureFullTextIndex(this.TABLE_NAME, columns, parser)
        }

        static get(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            let row = this.client.queryForObject(sql, args)
            return row ? this.struct(row) : null
        }

        static list(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            return this.client.query(sql, args).map(row => row ? this.struct(row) : null)
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
            let model = new __Table__()
            Object.keys(__Table__.columns).forEach(key => {
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
    return __Table__
}

export const Column = {
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
