import { Client } from "./client"

const Semaphore = java.util.concurrent.Semaphore

interface Column {
    COLUMN_NAME: string
}

export abstract class JDBCClient implements Client {
    protected connection: java.sql.Connection
    protected driver: java.sql.Driver
    protected mutex = new Semaphore(1)
    protected url: string

    protected connect() {
        this.connection = this.driver.connect(this.url, new java.util.Properties())
    }

    getInt(arg0: string, arg1?: string): number | null {
        return null
    }

    getFloat(arg0: string, arg1?: string): number | null {
        return null
    }

    getString(arg0: string, arg1?: string): string | null {
        return null
    }

    getJSON(arg0: string, arg1?: string): any | null {
        return null
    }

    setInt(arg0: string, arg1: number | string, arg2?: number, arg3?: number) {
    }

    setFloat(arg0: string, arg1: number | string, arg2?: number, arg3?: number) {
    }

    setString(arg0: string, arg1: string, arg2?: number | string, arg3?: number) {
    }

    setJSON(arg0: string, arg1: any, arg2?: any, arg3?: number) {
    }

    get(arg0: string, arg1?: string): java.lang.Byte[] {
        return []
    }

    put(arg0: string, arg1: java.lang.Byte[] | string, arg2?: number | java.lang.Byte[], arg3?: number) {
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

function resultSetToJSON<T>(resultSet: java.sql.ResultSet): T {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        let value = resultSet.getObject(i)
        json[key.toString()] = value
    }
    return json as T
}
