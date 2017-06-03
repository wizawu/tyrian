import { Client } from "./client"
import { indexName, resultSetToJSON } from "./util"

export abstract class JDBCClient implements Client {
    protected connection: java.sql.Connection
    protected url: string
    protected SQL_UNIX_TIMESTAMP: string

    protected abstract connect(): void

    getInt(bucket: string, key: string): number | null {
        return this.getByType(bucket, key, "int") as number
    }

    getFloat(bucket: string, key: string): number | null {
        return this.getByType(bucket, key, "float") as number
    }

    getString(bucket: string, key: string): string | null {
        return this.getByType(bucket, key, "string") as string
    }

    getJSON(bucket: string, key: string): any | null {
        let value = this.getByType(bucket, key, "string")
        return value === null ? null : JSON.parse(value as string)
    }

    setInt(bucket: string, key: string, value: number, ttl?: number) {
        this.setByType(bucket, key, "int", value, ttl)
    }

    setFloat(bucket: string, key: string, value: number, ttl?: number) {
        this.setByType(bucket, key, "float", value, ttl)
    }

    setString(bucket: string, key: string, value: string, ttl?: number) {
        this.setByType(bucket, key, "string", value, ttl)
    }

    setJSON(bucket: string, key: string, json: any, ttl?: number) {
        this.setByType(bucket, key, "string", JSON.stringify(json), ttl)
    }

    fetch(bucket: string, key: string): byte[] | null {
        return this.getByType(bucket, key, "blob") as byte[]
    }

    put(bucket: string, key: string, data: byte[], ttl?: number) {
        this.setByType(bucket, key, "blob", data, ttl)
    }

    ensureTable(table: string, pkey: string, type: string) {
        this.execute(`
            CREATE TABLE IF NOT EXISTS ${table} (
                ${pkey} ${type} PRIMARY KEY
            )
        `)
    }

    ensureColumn(table: string, column: string, type: string) {
        let rows = this.list<any>("DESC " + table)
        if (rows.some(row => row.COLUMN_NAME === column)) return
        this.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
    }

    ensureIndex(table: string, columns: string[]) {
        let index = indexName(table, columns, false)
        let rows = this.list<any>("SHOW INDEX FROM " + table)
        if (rows.some(row => row.INDEX_NAME === index)) return
        this.execute(`CREATE INDEX ${index} ON ${table}(${columns.join(",")})`)
    }

    ensureUniqueIndex(table: string, columns: string[]) {
        let index = indexName(table, columns, true)
        let rows = this.list<any>("SHOW INDEX FROM " + table)
        if (rows.some(row => row.INDEX_NAME === index)) return
        this.execute(`CREATE UNIQUE INDEX ${index} ON ${table}(${columns.join(",")})`)
    }

    one<T>(sql: string, parameters?: any[]): T | null {
        let result: T | null = null
        let statement = this.prepareStatement(sql, parameters)
        let resultSet = statement.executeQuery()
        if (resultSet.next()) result = resultSetToJSON<T>(resultSet)
        resultSet.close()
        statement.close()
        return result
    }

    list<T>(sql: string, parameters?: any[]): T[] {
        let result: T[] = []
        let statement = this.prepareStatement(sql, parameters)
        let resultSet = statement.executeQuery()
        while (resultSet.next()) result.push(resultSetToJSON<T>(resultSet))
        resultSet.close()
        statement.close()
        return result
    }

    insert(table: string, object: any) {
        let keys = Object.keys(object).join(",")
        let values = Object.keys(object).map(() => "?").join(",")
        this.execute(
            `INSERT INTO ${table}(${keys}) VALUES(${values})`,
            Object.keys(object).map(key => object[key])
        )
    }

    upsert(table: string, object: any) {
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

    delete(bucket_or_table: string, key: any) {
        let pkey = ""
        let rows = this.list<any>("SHOW INDEX FROM " + bucket_or_table)
        rows.forEach(row => {
            if (row.INDEX_NAME === "PRIMARY") pkey = row.COLUMN_NAME
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

    private existsTable(table: string) {
        let rows = this.list<any>("SHOW TABLES")
        return rows.some(row => row.TABLE_NAME === table)
    }

    private ensureBucket(bucket: string) {
        this.execute(`
            CREATE TABLE IF NOT EXISTS ${bucket} (
                key_ VARCHAR(2048) PRIMARY KEY,
                int_ BIGINT,
                float_ DOUBLE,
                string_ TEXT,
                blob_ LONGBLOB,
                timestamp BIGINT,
                expires_at BIGINT,
                INDEX ${bucket}_idx_expires_at (expires_at)
            )
        `)
    }

    private getByType(bucket: string, key: string, type: string) {
        if (!this.existsTable(bucket)) return
        let record = this.one<BucketRecord>(`
            SELECT *, expires_at - ${this.SQL_UNIX_TIMESTAMP} as ttl
            FROM ${bucket} WHERE key_ = ?`,
            [key]
        )
        if (record === null) return null
        if (typeof (record as any).ttl === "number" && (record as any).ttl <= 0) {
            this.wipeUpExpiration(bucket)
            return null
        }
        switch (type) {
            case "int":
                return record.int_
            case "float":
                return record.float_
            case "string":
                return record.string_
            case "blob":
                return record.blob_
            default:
                return null
        }
    }

    private setByType(bucket: string, key: string, type: string, value: any, ttl?: number) {
        this.ensureBucket(bucket)
        let keys = `key_,${type}_,timestamp,expires_at`
        let expires_at = ttl === undefined ? "NULL" : `${this.SQL_UNIX_TIMESTAMP} + ${ttl * 1e6}`
        let values = `?,?,${this.SQL_UNIX_TIMESTAMP},${expires_at}`
        this.execute(`REPLACE INTO ${bucket}(${keys}) VALUES(${values})`, [key, value])
    }

    private wipeUpExpiration(bucket: string) {
        this.execute(`DELETE FROM ${bucket} WHERE ${this.SQL_UNIX_TIMESTAMP} >= expires_at`)
    }
}

interface BucketRecord {
    key_: string
    int_?: number
    float_?: number
    string_?: string
    blob_?: byte[]
    timestamp: number
    expires_at?: number
}
