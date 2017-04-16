import ConnectionImpl from "./ConnectionImpl"
import { resultSetToJSON } from "./util"

type PreparedStatement = java.sql.PreparedStatement

interface Column {
    COLUMN_NAME: string
}

abstract class JDBCConnection implements ConnectionImpl {
    connection: java.sql.Connection
    driver: java.sql.Driver
    url: string

    private prepareStatement(sql: string, parameters: any[]): PreparedStatement {
        if (this.connection.isClosed()) this.connect()
        let statement = this.connection.prepareStatement(sql) as PreparedStatement
        parameters.forEach((parameter, i) => statement.setObject(i + 1, parameter))
        return statement
    }

    private indexName(columnNames: string[], unique: boolean): string {
        return (unique ? "uidx_" : "idx_") + columnNames.map(name => name.toLowerCase()).join("_")
    }

    connect() {
        this.connection = this.driver.connect(this.url, new java.util.Properties())
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

    ensureIndex(tableName: string, columnNames: string[]) {
        let indexName = this.indexName(columnNames, false)
        let indexColumns = columnNames.join(",")
        this.execute(`CREATE INDEX IF NOT EXISTS ${indexName} ON ${tableName}(${indexColumns})`, [])
    }

    ensureUniqueIndex(tableName: string, columnNames: string[]) {
        let indexName = this.indexName(columnNames, true)
        let indexColumns = columnNames.join(",")
        this.execute(`CREATE UNIQUE INDEX IF NOT EXISTS ${indexName} ON ${tableName}(${indexColumns})`, [])
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
        let keys = Object.keys(obj).join(",")
        let values = Object.keys(obj).map(() => "?").join(",")
        let parameters = Object.keys(obj).map(key => obj[key])
        this.connection.setAutoCommit(false)

        try {
            let sql = `DELETE FROM ${tableName} WHERE ${primary} = ?`
            this.execute(sql, [obj[primary]])
            sql = `INSERT INTO ${tableName}(${keys}) VALUES(${values})`
            this.execute(sql, parameters)
            this.connection.commit()
        } catch (ex) {
            this.connection.setAutoCommit(false)
            this.connection.rollback()
            throw ex
        } finally {
            this.connection.setAutoCommit(true)
        }
    }

    execute(sql: string, parameters: any[]) {
        let statement = this.prepareStatement(sql, parameters)
        statement.executeUpdate()
        statement.close()
    }

    close() {
        this.connection.close()
    }
}

export default JDBCConnection