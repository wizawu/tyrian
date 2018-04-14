import * as uuid from "uuid"

import { Client } from "./client"
import { Collate, Engine, Parser } from "./constant"

export interface Definition {
    name: string
    primary: string
    engine?: Engine
    collate?: Collate
}

export function Table(definition: Definition) {
    return class {
        private static NAME = definition.name
        private static PRIMARY = definition.primary
        private static ENGINE = definition.engine
        private static COLLATE = definition.collate
        private static columns = {}
        private static client: Client

        protected static setColumn(key: string, type: string) {
            this.columns[key] = { key, type }
        }

        static tableName() {
            return this.NAME
        }

        static setClient(client: Client) {
            this.client = client
            return this
        }

        static ensureTable() {
            this.client.ensureTable(
                this.NAME,
                this.PRIMARY,
                this.columns[this.PRIMARY].type,
                this.ENGINE,
                this.COLLATE,
            )
            Object.keys(this.columns).forEach(key => {
                this.client.ensureColumn(
                    this.NAME,
                    key,
                    this.columns[key].type
                )
            })
        }

        static ensureIndex(columns: string[]) {
            this.client.ensureIndex(this.NAME, columns)
        }

        static ensureUniqueIndex(columns: string[]) {
            this.client.ensureUniqueIndex(this.NAME, columns)
        }

        static ensureFullTextIndex(columns: string[], parser = Parser.ngram) {
            this.client.ensureFullTextIndex(this.NAME, columns, parser)
        }

        static get(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.NAME} WHERE TRUE`, query)
            let row = this.client.queryForObject(sql, args)
            return row ? this.struct(row) : null
        }

        static list(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.NAME} WHERE TRUE`, query)
            return this.client.query(sql, args).map(row => this.struct(row))
        }

        static delete(query: object) {
            let { sql, args } = this.queryToSQL(`DELETE FROM ${this.NAME} WHERE TRUE`, query)
            if (args.length === 0) {
                throw "Cannot delete rows with an empty query"
            } else {
                return this.client.update(sql, args)
            }
        }

        static insert(row: object, options = { upsert: false }) {
            let model = this.struct(row)
            let keys = Object.keys(model)
            return this.client.update(
                `${options.upsert ? "REPLACE" : "INSERT"} INTO
                    ${this.NAME} (${keys.join(",")})
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
            let keys = Object.keys(this.struct(rows[0]))
            const BatchPreparedStatementSetter = Java.extend(
                Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"),
                {
                    setValues(preparedStatement, i) {
                        let model = that.struct(rows[i])
                        keys.forEach((key, j) => {
                            const value = model[key]
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
                    ${this.NAME} (${keys.join(",")})
                    VALUES (${keys.map(() => "?").join(",")})
                `,
                new BatchPreparedStatementSetter()
            )
        }

        static batchUpsert(rows: object[]) {
            return this.batchInsert(rows, { upsert: true })
        }

        static struct(json: object) {
            let model = JSON.parse(JSON.stringify(this.prototype))
            Object.keys(model).forEach(key => {
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
}

export const Columns = {
    BIGINT(model, key) {
        model.setColumn(key, "BIGINT")
        model[key] = 0
    },
    BOOL(model, key) {
        model.setColumn(key, "BOOL")
        model[key] = false
    },
    DOUBLE(model, key) {
        model.setColumn(key, "DOUBLE")
        model[key] = 0
    },
    JSON(model, key) {
        model.setColumn(key, "JSON")
        model[key] = null
    },
    VARCHAR(n: number) {
        return function (model, key) {
            model.setColumn(key, `VARCHAR(${n})`)
            model[key] = ""
        }
    },
    UUID(model, key) {
        model.setColumn(key, `VARCHAR(40)`)
        model[key] = uuid.v4()
    },
    TEXT(model, key) {
        model.setColumn(key, "TEXT")
        model[key] = ""
    },
    TIMESTAMP(model, key) {
        model.setColumn(key, "BIGINT")
        model[key] = Date.now()
    },
}
