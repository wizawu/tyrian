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
    class __Table__ {
        static readonly TABLE_NAME = definition.name
        private static PRIMARY = definition.primary
        private static ENGINE = definition.engine
        private static COLLATE = definition.collate
        private static columns = {}
        private static client: Client

        protected setColumn(key: string, type: string) {
            __Table__.columns[key] = { key, type }
        }

        static setClient(client: Client) {
            this.client = client
            return this
        }

        static ensureTable() {
            this.client.ensureTable(
                this.TABLE_NAME,
                this.PRIMARY,
                this.columns[this.PRIMARY].type,
                this.ENGINE,
                this.COLLATE,
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

        static ensureFullTextIndex(columns: string[], parser = Parser.ngram) {
            this.client.ensureFullTextIndex(this.TABLE_NAME, columns, parser)
        }

        static get(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            return this.client.queryForObject(sql, args)
        }

        static list(query: object) {
            let { sql, args } = this.queryToSQL(`SELECT * FROM ${this.TABLE_NAME} WHERE TRUE`, query)
            return this.client.query(sql, args)
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
            let keys = Object.keys(this.columns)
            return this.client.update(
                `${options.upsert ? "REPLACE" : "INSERT"} INTO
                    ${this.TABLE_NAME} (${keys.join(",")})
                    VALUES (${keys.map(() => "?").join(",")})
                `,
                keys.map(key => {
                    const value = row[key] === undefined ? null : row[key]
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
            let keys = Object.keys(this.columns)
            const BatchPreparedStatementSetter = Java.extend(
                Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"),
                {
                    setValues(preparedStatement, i) {
                        keys.forEach((key, j) => {
                            const value = rows[i][key] === undefined ? null : rows[i][key]
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

        merge(json: object) {
            Object.keys(this).forEach(key => {
                if (json && json[key] !== undefined) this[key] = json[key]
            })
            return this
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
