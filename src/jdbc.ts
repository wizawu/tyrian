import { Client, Logger } from "./client"
import { invalidArgumentType } from "./util"

const Semaphore = java.util.concurrent.Semaphore

/*
interface Column {
    COLUMN_NAME: string
}

function resultSetToJSON<T>(resultSet: java.sql.ResultSet): T {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        let value = resultSet.getObject(i)
        json[key.toString()] = value
    }
    return json as T
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

    getInt(arg0: string, arg1?: string): number | null {
        if (arg1 === undefined) {
            return this.getInt1(arg0)
        } else {
            return this.getInt2(arg0, arg1)
        }
    }

    private getInt1(key: string): number | null {
        return null
    }

    private getInt2(bucket: string, key: string): number | null {
        return null
    }

    getFloat(arg0: string, arg1?: string): number | null {
        if (arg1 === undefined) {
            return this.getFloat1(arg0)
        } else {
            return this.getFloat2(arg0, arg1)
        }
    }

    private getFloat1(key: string): number | null {
        return null
    }

    private getFloat2(bucket: string, key: string): number | null {
        return null
    }

    getString(arg0: string, arg1?: string): string | null {
        if (arg1 === undefined) {
            return this.getString1(arg0)
        } else {
            return this.getString2(arg0, arg1)
        }
    }

    private getString1(key: string): string | null {
        return null
    }

    private getString2(bucket: string, key: string): string | null {
        return null
    }

    getJSON(arg0: string, arg1?: string): any | null {
        if (arg1 === undefined) {
            return this.getJSON1(arg0)
        } else {
            return this.getJSON2(arg0, arg1)
        }
    }

    private getJSON1(key: string): any | null {
        return null
    }

    private getJSON2(bucket: string, key: string): any | null {
        return null
    }

    setInt(arg0: string, arg1: number | string, arg2?: number, arg3?: number) {
        if (typeof arg1 === "number") {
            this.setInt3(arg0, arg1, arg2)
        } else if (typeof arg1 === "string" && typeof arg2 === "number") {
            this.setInt4(arg0, arg1, arg2, arg3)
        } else {
            throw invalidArgumentType("setInt")
        }
    }

    private setInt3(key: string, value: number, ttl?: number) {
    }

    private setInt4(bucket: string, key: string, value: number, ttl?: number) {
    }

    setFloat(arg0: string, arg1: number | string, arg2?: number, arg3?: number) {
        if (typeof arg1 === "number") {
            this.setFloat3(arg0, arg1, arg2)
        } else if (typeof arg1 === "string" && typeof arg2 === "number") {
            this.setFloat4(arg0, arg1, arg2, arg3)
        } else {
            throw invalidArgumentType("setFloat")
        }
    }

    private setFloat3(key: string, value: number, ttl?: number) {
    }

    private setFloat4(bucket: string, key: string, value: number, ttl?: number) {
    }

    setString(arg0: string, arg1: string, arg2?: number | string, arg3?: number) {
        if (arg2 === undefined || typeof arg2 === "number") {
            this.setString3(arg0, arg1, arg2)
        } else if (typeof arg2 === "string") {
            this.setString4(arg0, arg1, arg2, arg3)
        } else {
            throw invalidArgumentType("setString")
        }
    }

    private setString3(key: string, value: string, ttl?: number) {
    }

    private setString4(bucket: string, key: string, value: string, ttl?: number) {
    }

    setJSON(arg0: string, arg1: any, arg2?: any, arg3?: number) {
        if (typeof arg1 === "object") {
            this.setJSON3(arg0, arg1, arg2)
        } else if (typeof arg1 === "string" && typeof arg2 === "object") {
            this.setJSON4(arg0, arg1, arg2, arg3)
        } else {
            throw invalidArgumentType("setJSON")
        }
    }

    private setJSON3(key: string, json: any, ttl?: number) {
    }

    private setJSON4(bucket: string, key: string, json: any, ttl?: number) {
    }

    get(arg0: string, arg1?: string): java.lang.Byte[] {
        if (arg1 === undefined) {
            return this.get1(arg0)
        } else {
            return this.get2(arg0, arg1)
        }
    }

    private get1(key: string): java.lang.Byte[] {
        return []
    }

    private get2(bucket: string, key: string): java.lang.Byte[] {
        return []
    }

    put(arg0: string, arg1: java.lang.Byte[] | string, arg2?: number | java.lang.Byte[], arg3?: number) {
        if (typeof arg1 !== "string" && (arg2 === undefined || typeof arg2 === "number")) {
            this.put3(arg0, arg1, arg2)
        } else if (typeof arg1 === "string" && arg2 && typeof arg2 !== "number") {
            this.put4(arg0, arg1, arg2, arg3)
        } else {
            throw invalidArgumentType("put")
        }
    }

    private put3(key: string, data: java.lang.Byte[], ttl?: number) {
    }

    private put4(bucket: string, key: string, data: java.lang.Byte[], ttl?: number) {
    }

    delete(bucket_or_table: string, key: any) {
    }

    ensureTable(table: string, pkey: string, type: string) {
    }

    ensureColumn(table: string, column: string, type: string) {
    }

    ensureIndex(table: string, columns: string[]) {
    }

    ensureUniqueIndex(table: string, columns: string[]) {
    }

    one<T>(sql: string, parameters?: any[]): T | null {
        return null
    }

    list<T>(sql: string, parameters?: any[]): T[] {
        return []
    }

    insert(table: string, object: any) {
    }

    update(table: string, object: any) {
    }

    save(table: string, object: any) {
    }

    execute(sql: string, parameters?: any[]) {
    }

    close() {
        this.connection.close()
    }

    /*
    private prepareStatement(sql: string, parameters: any[]) {
        if (this.connection.isClosed()) this.connect()
        let statement = this.connection.prepareStatement(sql)
        parameters.forEach((parameter, i) => statement.setObject(i + 1, parameter))
        return statement
    }

    private indexName(tableName: string, columnNames: string[], unique: boolean): string {
        return tableName + "_" + (unique ? "uidx_" : "idx_") + columnNames.map(name => name.toLowerCase()).join("_")
    }


    ensureTable(tableName: string) {
        this.execute(`CREATE TABLE IF NOT EXISTS ${tableName} (id VARCHAR(64))`, [])
    }

    ensureColumn(tableName: string, columnName: string, columnType: string) {
        if (this.url.startsWith("jdbc:postgresql:")) {
            let info = this.one<any>(`
                SELECT * FROM information_schema.columns
                WHERE table_name = '${tableName}' AND column_name = '${columnName.toLowerCase()}'
            `, [])
            if (info) return
        } else {
            let columns = this.list<Column>("DESC " + tableName, [])
            if (columns.some(col => col.COLUMN_NAME == columnName)) return
        }
        this.execute(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`, [])
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
        let statement = this.prepareStatement("SELECT 0", [])
        try {
            statement.execute()
        } catch (ex) {
        } finally {
            statement.close()
        }

        let result: T[] = []
        statement = this.prepareStatement(sql, parameters)
        try {
            let resultSet = statement.executeQuery()
            while (resultSet.next()) result.push(resultSetToJSON<T>(resultSet))
            resultSet.close()
        } finally {
            statement.close()
        }
        return result
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

    execute(sql: string, parameters: any[]) {
        let statement = this.prepareStatement(sql, parameters)
        statement.executeUpdate()
        statement.close()
    }

    */
}
