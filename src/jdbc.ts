import { Client } from "./client"
import { indexName, resultSetToJSON } from "./util"

export abstract class JDBCClient implements Client {
    protected connection: java.sql.Connection
    protected url: string
    protected SQL_UNIX_TIMESTAMP: string

    protected abstract connect(): void

    get(bucket: string, key: string): number | string | Object | null {
        if (!this.one("SHOW TABLES LIKE ?", [bucket])) return null
        let record = this.one(`
            SELECT *, expires_at - ${this.SQL_UNIX_TIMESTAMP} as ttl
            FROM ${bucket} WHERE key_ = ?`,
            [key]
        ) as BucketRecord
        if (record === null) return null
        if (typeof (record as any).ttl === "number" && (record as any).ttl <= 0) {
            this.execute(`DELETE FROM ${bucket} WHERE ${this.SQL_UNIX_TIMESTAMP} >= expires_at`)
            return null
        }
        return record.value
    }

    getJSON(bucket: string, key: string): Object | null {
        let value = this.get(bucket, key)
        return value === null ? null : JSON.parse(value as string)
    }

    setInt(bucket: string, key: string, value: number, ttl?: number) {
        this.setByType(true, bucket, "BIGINT", key, value, ttl)
    }

    setFloat(bucket: string, key: string, value: number, ttl?: number) {
        this.setByType(true, bucket, "DOUBLE", key, value, ttl)
    }

    setString(bucket: string, key: string, value: string, ttl?: number) {
        this.setByType(true, bucket, "VARCHAR(1024)", key, value, ttl)
    }

    putInt(bucket: string, key: string, value: number, ttl?: number) {
        this.setByType(false, bucket, "BIGINT", key, value, ttl)
    }

    putFloat(bucket: string, key: string, value: number, ttl?: number) {
        this.setByType(false, bucket, "DOUBLE", key, value, ttl)
    }

    putString(bucket: string, key: string, value: string, ttl?: number) {
        this.setByType(false, bucket, "TEXT", key, value, ttl)
    }

    putJSON(bucket: string, key: string, json: Object, ttl?: number) {
        this.setByType(false, bucket, "TEXT", key, JSON.stringify(json), ttl)
    }

    putBytes(bucket: string, key: string, data: byte[], ttl?: number) {
        this.setByType(false, bucket, "LONGBLOB", key, data, ttl)
    }

    ensureTable(table: string, pkey: string, type: string) {
        this.execute(`
            CREATE TABLE IF NOT EXISTS ${table} (
                ${pkey} ${type} PRIMARY KEY
            )
        `)
    }

    ensureColumn(table: string, column: string, type: string) {
        let columns: any[] = this.list("DESC " + table)
        if (columns.some(col => col.COLUMN_NAME === column)) return
        this.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
    }

    ensureIndex(table: string, columns: string[]) {
        let index = indexName(table, columns, false)
        let indexes: any[] = this.list("SHOW INDEX FROM " + table)
        if (indexes.some(idx => idx.INDEX_NAME === index)) return
        this.execute(`CREATE INDEX ${index} ON ${table}(${columns.join(",")})`)
    }

    ensureUniqueIndex(table: string, columns: string[]) {
        let index = indexName(table, columns, true)
        let indexes: any[] = this.list("SHOW INDEX FROM " + table)
        if (indexes.some(idx => idx.INDEX_NAME === index)) return
        this.execute(`CREATE UNIQUE INDEX ${index} ON ${table}(${columns.join(",")})`)
    }

    one(sql: string, parameters?: any[]): Object | null {
        let result: Object | null = null
        let statement = this.prepareStatement(sql, parameters)
        let resultSet = statement.executeQuery()
        if (resultSet.next()) result = resultSetToJSON(resultSet)
        resultSet.close()
        statement.close()
        return result
    }

    list(sql: string, parameters?: any[]): Object[] {
        let result: Object[] = []
        let statement = this.prepareStatement(sql, parameters)
        let resultSet = statement.executeQuery()
        while (resultSet.next()) result.push(resultSetToJSON(resultSet))
        resultSet.close()
        statement.close()
        return result
    }

    insert(table: string, object: Object) {
        let keys = Object.keys(object).join(",")
        let values = Object.keys(object).map(() => "?").join(",")
        this.execute(
            `INSERT INTO ${table}(${keys}) VALUES(${values})`,
            Object.keys(object).map(key => object[key])
        )
    }

    upsert(table: string, object: Object) {
        let keys = Object.keys(object).join(",")
        let values = Object.keys(object).map(() => "?").join(",")
        this.execute(
            `REPLACE INTO ${table}(${keys}) VALUES(${values})`,
            Object.keys(object).map(key => object[key])
        )
    }

    execute(sql: string, parameters?: any[]) {
        let statement = this.prepareStatement(sql, parameters)
        statement.executeUpdate()
        statement.close()
    }

    delete(bucket_or_table: string, key: number | string) {
        let pkey = ""
        let indexes: any[] = this.list("SHOW INDEX FROM " + bucket_or_table)
        indexes.forEach(index => {
            if (index.INDEX_NAME === "PRIMARY") pkey = index.COLUMN_NAME
        })
        this.execute(`DELETE FROM ${bucket_or_table} WHERE ${pkey} = ?`, [key])
    }

    close() {
        this.connection.close()
    }

    private prepareStatement(sql: string, parameters?: any[]) {
        if (this.connection.isClosed()) this.connect()
        let statement = this.connection.prepareStatement(sql)
        if (parameters) {
            parameters.forEach((parameter, i) => statement.setObject(i + 1, parameter))
        }
        return statement
    }

    private setByType(inMemory: boolean, bucket: string, type: string, key: string, value: any, ttl?: number) {
        this.execute(`
            CREATE TABLE IF NOT EXISTS ${bucket} (
                key_ VARCHAR(255) PRIMARY KEY,
                value ${type},
                timestamp BIGINT,
                expires_at BIGINT,
                INDEX ${bucket}_idx_expires_at (expires_at)
            ) ${inMemory ? "ENGINE = MEMORY" : ""}
        `)
        let keys = `key_,value,timestamp,expires_at`
        let expires_at = ttl === undefined ? "NULL" : `${this.SQL_UNIX_TIMESTAMP} + ${ttl * 1e6}`
        let values = `?,?,${this.SQL_UNIX_TIMESTAMP},${expires_at}`
        this.execute(`REPLACE INTO ${bucket}(${keys}) VALUES(${values})`, [key, value])
    }
}

interface BucketRecord {
    key_: string
    value: any
    timestamp: number
    expires_at: number
}
