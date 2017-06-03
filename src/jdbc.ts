import { Client } from "./client"
import { indexName, resultSetToJSON } from "./util"

export abstract class JDBCClient implements Client {
    protected cache: net.sf.ehcache.CacheManager
    protected connection: java.sql.Connection
    protected url: string
    protected SQL_UNIX_TIMESTAMP: string

    protected abstract connect(): void
    protected abstract ensureBucket(bucket: string, withCache: boolean)
    abstract upsert(table: string, object: any)

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
        java.lang.System.out.println(true)
        if (resultSet.next()) {
            java.lang.System.out.println(true)
            result = resultSetToJSON<T>(resultSet)
        }
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
        if (this.cache.cacheExists(bucket_or_table)) {
            this.cache.getCache(bucket_or_table).remove(key)
        }
    }

    close() {
        this.connection.close()
        this.cache.shutdown()
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

    protected ensureBucketInCache(bucket: string) {
        if (!this.cache.cacheExists(bucket)) {
            let cache = new net.sf.ehcache.Cache(bucket, 4096, false, false, 3600, 300)
            this.cache.addCacheIfAbsent(cache)
        }
    }

    private getByType(bucket: string, key: string, type: string) {
        let useCache = type !== "blob"
        if (useCache) {
            if (this.cache.cacheExists(bucket)) {
                let element = this.cache.getCache(bucket).get(key)
                if (element !== null) return element.getValue()
            }
        } else if (!this.existsTable(bucket)) {
            return null
        }

        let record = this.one<BucketRecord>(`
            SELECT *, expires_at - ${this.SQL_UNIX_TIMESTAMP} as ttl
            FROM ${bucket} WHERE unique_key = ?`,
            [key]
        )
        if (record === null) return null
        if (typeof (record as any).ttl === "number" && (record as any).ttl <= 0) {
            this.wipeUpExpiration(bucket)
            return null
        }

        let value: any = null
        switch (type) {
            case "int":
                value = record.int_value
                break
            case "float":
                value = record.float_value
                break
            case "string":
                value = record.string_value
                break
            case "blob":
                value = record.blob_value
                break
        }
        if (useCache) {
            this.ensureBucketInCache(bucket)
            this.putToCache(bucket, key, value, (record as any).ttl / 1e6)
        }
        return value
    }

    private setByType(bucket: string, key: string, type: string, value: any, ttl?: number) {
        let useCache = type !== "blob"
        if (useCache) {
            this.ensureBucketInCache(bucket)
            let element = this.cache.getCache(bucket).get(key)
            if (element !== null && element.getValue() === value) return
        }
        this.ensureBucket(bucket, useCache)
        let keys = `unique_key,${type}_value,timestamp,expires_at`
        let expires_at = ttl === undefined ? "NULL" : `${this.SQL_UNIX_TIMESTAMP} + ${ttl * 1e6}`
        let values = `?,?,${this.SQL_UNIX_TIMESTAMP},${expires_at}`
        this.execute(`REPLACE INTO ${bucket}(${keys}) VALUES(${values})`, [key, value])
        if (useCache) this.putToCache(bucket, key, value, ttl)
    }

    private putToCache(bucket: string, key: string, value: any, ttl?: number) {
        let config = this.cache.getConfiguration().getDefaultCacheConfiguration()
        if (typeof ttl === "number" && ttl <= 0) return
        if (ttl === undefined || ttl === null || ttl === NaN) ttl = config.getTimeToLiveSeconds()
        let element = new net.sf.ehcache.Element(key, value, config.getTimeToIdleSeconds(), ttl)
        this.cache.getCache(bucket).put(element)
    }

    private wipeUpExpiration(bucket: string) {
        this.execute(`DELETE FROM ${bucket} WHERE ${this.SQL_UNIX_TIMESTAMP} >= expires_at`)
    }
}

interface BucketRecord {
    unique_key: string
    int_value?: number
    float_value?: number
    string_value?: string
    blob_value?: byte[]
    timestamp: number
    expires_at?: number
}
