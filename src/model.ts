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

    public generateTable() { }

    constructor(options?: Options) {
        if (options && options.client && options.table && options.primary) {
            const client = options.client

            this.BIGINT = (() => "BIGINT") as any
            this.BOOL = (() => "BOOL") as any
            this.DOUBLE = (() => "DOUBLE") as any
            this.JSON = (() => "JSON") as any
            this.VARCHAR = n => `VARCHAR(${n})`
            this.UUID = () => "VARCHAR(40)"
            this.TEXT = () => "TEXT"
            this.TIMESTAMP = (() => "BIGINT") as any

            this.generateTable = () => {
                client.ensureTable(
                    options.table,
                    options.primary,
                    this[options.primary],
                    options.engine,
                    options.collate,
                )

                Object.keys(this).forEach(key => {
                    if (typeof this[key] !== "function") {
                        client.ensureColumn(options.table, key, this[key])
                    }
                });

                (options.index || []).forEach(columns => client.ensureIndex(options.table, columns));
                (options.unique || []).forEach(columns => client.ensureUniqueIndex(options.table, columns));
                (options.fulltext || []).forEach(columns =>
                    client.ensureFullText(options.table, columns.slice(1), columns[0] as Parser)
                )
            }
        }
    }
}
