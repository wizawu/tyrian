import { Client } from "./client"
import { indexName, resultSetToJSON } from "./util"

export abstract class JDBCClient implements Client {
    protected connection: java.sql.Connection
    protected driver: java.sql.Driver
    protected url: string

    protected connect() {
        this.connection = this.driver.connect(this.url, new java.util.Properties())
    }

    getInt(bucket: string, key: string): number | null {
        return null
    }

    getFloat(bucket: string, key: string): number | null {
        return null
    }

    getString(bucket: string, key: string): string | null {
        return null
    }

    getJSON(bucket: string, key: string): any | null {
        return null
    }

    setInt(bucket: string, key: string, value: number, ttl?: number) {
    }

    setFloat(bucket: string, key: string, value: number, ttl?: number) {
    }

    setString(bucket: string, key: string, value: string, ttl?: number) {
    }

    setJSON(bucket: string, key: string, json: any, ttl?: number) {
    }

    get(bucket: string, key: string): java.lang.Byte[] | null {
        return []
    }

    put(bucket: string, key: string, data: java.lang.Byte[], ttl?: number) {
    }

    ensureTable(table: string, pkey: string, type: string) {
        this.execute(`
            CREATE TABLE IF NOT EXISTS ${table} (
                ${pkey} ${type} NOT NULL,
                PRIMARY KEY (${pkey})
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
        this.execute(`DELETE FROM ${bucket_or_table} WHERE ${pkey} = ${key}`)
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
}
