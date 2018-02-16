import * as uuid from "uuid"

import { Client } from "./client"
import { Collate, Engine, Parser } from "./constant"

export interface Options {
    client: Client
    table: string
    primary: string
    engine?: Engine
    collate?: Collate
    index?: string[][]
    unique?: string[][]
    fulltext?: (Parser | string)[][]
}

export abstract class Model {
    protected BIGINT() {
        return 0
    }

    protected BOOL() {
        return false
    }

    protected DOUBLE() {
        return 0
    }

    protected JSON() {
        return null
    }

    protected VARCHAR(n: number) {
        return ""
    }

    protected UUID() {
        return uuid.v4()
    }

    protected TEXT() {
        return ""
    }

    protected TIMESTAMP() {
        return Date.now()
    }

    private queryToSQL(sql: string, query: object) {
        let args: any[] = []
        Object.keys(query).forEach(key => {
            sql += ` AND ${key} = ?`
            args.push(query[key])
        })
        return { sql, args }
    }

    public merge(row: object) {
        if (!row) return this
        Object.keys(this).forEach(key => {
            if (row[key] !== undefined) this[key] = row[key]
        })
        return this
    }

    public getTableName() {
        return ""
    }

    public generateTable() { }

    public get(query: object): object | null {
        return null
    }

    public list(query: object): object[] {
        return []
    }

    public delete(query: object) { }

    public insert(row: object, options?: any) { }

    public upsert(row: object) { }

    public batchInsert(rows: object[], options?: any) { }

    public batchUpsert(rows: object[]) { }

    constructor(options?: Options) {
        if (options && options.client && options.table && options.primary) {
            const { client, table } = options
            const Row = this.constructor as any

            this.BIGINT = (() => "BIGINT") as any
            this.BOOL = (() => "BOOL") as any
            this.DOUBLE = (() => "DOUBLE") as any
            this.JSON = (() => "JSON") as any
            this.VARCHAR = n => `VARCHAR(${n})`
            this.UUID = () => "VARCHAR(40)"
            this.TEXT = () => "TEXT"
            this.TIMESTAMP = (() => "BIGINT") as any

            this.getTableName = () => table

            this.generateTable = () => {
                client.ensureTable(
                    table,
                    options.primary,
                    this[options.primary],
                    options.engine,
                    options.collate,
                )

                Object.keys(this).forEach(key => {
                    if (typeof this[key] !== "function") {
                        client.ensureColumn(table, key, this[key])
                    }
                });

                (options.index || []).forEach(columns => client.ensureIndex(table, columns));
                (options.unique || []).forEach(columns => client.ensureUniqueIndex(table, columns));
                (options.fulltext || []).forEach(columns =>
                    client.ensureFullText(table, columns.slice(1), columns[0] as Parser)
                )
            }

            this.get = query => {
                let { sql, args } = this.queryToSQL(`SELECT * FROM ${table} WHERE TRUE`, query)
                try {
                    return new Row().merge(client.queryForObject(sql, args))
                } catch (e) {
                    if (e instanceof org.springframework.dao.EmptyResultDataAccessException) {
                        return null
                    } else {
                        throw e
                    }
                }
            }

            this.list = query => {
                let { sql, args } = this.queryToSQL(`SELECT * FROM ${table} WHERE TRUE`, query)
                return client.query(sql, args).map(row => new Row().merge(row))
            }

            this.delete = query => {
                let { sql, args } = this.queryToSQL(`DELETE FROM ${table} WHERE TRUE`, query)
                if (args.length === 0) {
                    throw "Cannot delete rows with an empty query"
                } else {
                    return client.update(sql, args)
                }
            }

            this.insert = (row: object, options = { upsert: false }) => {
                let newRow = new Row().merge(row)
                let keys = Object.keys(newRow)
                let values = keys.map(() => "?").join(",")
                return client.update(
                    `${options.upsert ? "REPLACE" : "INSERT"} INTO ${table}(${keys.join(",")}) VALUES(${values})`,
                    keys.map(key => {
                        let value = newRow[key]
                        if (typeof value === "object") {
                            return value === null ? null : JSON.stringify(value)
                        } else {
                            return value
                        }
                    })
                )
            }

            this.upsert = (row: object) => {
                return this.insert(row, { upsert: true })
            }

            this.batchInsert = (rows: object[], options = { upsert: false }) => {
                if (rows.length === 0) return
                let keys = Object.keys(new Row())
                let values = keys.map(() => "?").join(",")
                const BatchPreparedStatementSetter = Java.extend(
                    Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"),
                    {
                        setValues(preparedStatement, i) {
                            let newRow = new Row().merge(rows[i])
                            keys.forEach((key, j) => {
                                const value = newRow[key]
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
                return client.db.batchUpdate(
                    `${options.upsert ? "REPLACE" : "INSERT"} INTO ${table}(${keys.join(",")}) VALUES(${values})`,
                    new BatchPreparedStatementSetter()
                )
            }

            this.batchUpsert = (rows: object[]) => {
                return this.batchInsert(rows, { upsert: true })
            }
        }
    }
}
