import { Client, Logger } from "./client"
import { resultSetToJSON } from "./util"

const Semaphore = java.util.concurrent.Semaphore

/*
interface Column {
    COLUMN_NAME: string
}

*/

export abstract class JDBCClient implements Client {
    protected connection: java.sql.Connection
    protected driver: java.sql.Driver
    protected logger: Logger
    protected mutex = new Semaphore(1)
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
        let columns = this.list<any>("DESC " + table)
        if (columns.some(col => col.COLUMN_NAME === column)) return
        this.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
    }

    ensureIndex(table: string, columns: string[]) {
    }

    ensureUniqueIndex(table: string, columns: string[]) {
    }

    one<T>(sql: string, parameters?: any[]): T | null {
        return null
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
    }

    update(table: string, object: any) {
    }

    save(table: string, object: any) {
    }

    execute(sql: string, parameters?: any[]) {
        let statement = this.prepareStatement(sql, parameters)
        statement.executeUpdate()
        statement.close()
    }

    delete(bucket_or_table: string, key: any) {
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

    /*

    private indexName(tableName: string, columnNames: string[], unique: boolean): string {
        return tableName + "_" + (unique ? "uidx_" : "idx_") + columnNames.map(name => name.toLowerCase()).join("_")
    }

    ensurePrimaryKey(tableName: string, columnName: string) {
        try {
            this.execute(`ALTER TABLE ${tableName} ADD PRIMARY KEY (${columnName})`, [])
        } catch (ex) {
            log(ex)
        }
    }

    ensureIndex(tableName: string, columnNames: string[]) {
        let indexName = this.indexName(tableName, columnNames, false)
        let indexColumns = columnNames.join(",")
        try {
            this.execute(`CREATE INDEX IF NOT EXISTS ${indexName} ON ${tableName}(${indexColumns})`, [])
        } catch (ex) {
            log(ex)
            try {
                this.execute(`CREATE INDEX ${indexName} ON ${tableName}(${indexColumns})`, [])
            } catch (ex) {
                log(ex)
            }
        }
    }

    ensureUniqueIndex(tableName: string, columnNames: string[]) {
        let indexName = this.indexName(tableName, columnNames, true)
        let indexColumns = columnNames.join(",")
        try {
            this.execute(`CREATE UNIQUE INDEX IF NOT EXISTS ${indexName} ON ${tableName}(${indexColumns})`, [])
        } catch (ex) {
            log(ex)
            try {
                this.execute(`CREATE UNIQUE INDEX ${indexName} ON ${tableName}(${indexColumns})`, [])
            } catch (ex) {
                log(ex)
            }
        }
    }

    one<T>(sql: string, parameters: any[]): T | null {
        let statement = this.prepareStatement("SELECT 0", [])
        try {
            statement.execute()
        } catch (ex) {
        } finally {
            statement.close()
        }

        let result: T | null = null
        statement = this.prepareStatement(sql, parameters)
        try {
            let resultSet = statement.executeQuery()
            if (resultSet.next()) result = resultSetToJSON<T>(resultSet)
            resultSet.close()
        } finally {
            statement.close()
        }
        return result
    }

    list<T>(sql: string, parameters: any[]): T[] {
    }

    save(tableName: string, obj: any, primary: string) {
        let exists = !!this.one<any>(
            `SELECT * FROM ${tableName} WHERE ${primary} = ?`,
            [obj[primary]]
        )
        let insert = () => {
            let keys = Object.keys(obj).join(",")
            let values = Object.keys(obj).map(() => "?").join(",")
            this.execute(
                `INSERT INTO ${tableName}(${keys}) VALUES(${values})`,
                Object.keys(obj).map(key => obj[key])
            )
        }
        if (exists) {
            this.mutex.acquire()
            this.connection.setAutoCommit(false)
            try {
                this.execute(
                    `DELETE FROM ${tableName} WHERE ${primary} = ?`,
                    [obj[primary]]
                )
                insert()
                this.connection.commit()
            } catch (ex) {
                log(ex)
                this.connection.rollback()
            } finally {
                this.connection.setAutoCommit(true)
                this.mutex.release()
            }
        } else {
            insert()
        }
    }
    */
}
