const DriverManager = java.sql.DriverManager
const String = java.lang.String
type PreparedStatement = java.sql.PreparedStatement

import IConnection from "./IConnection"
import { ConnectOptions } from "./IConnection"
import { readAs } from "./ResultSet"

interface Column {
    COLUMN_NAME: string
}

export abstract class MySQLConnectionImpl implements IConnection {
    connection: java.sql.Connection
    url: string

    private prepareStatement(sql: string, parameters: any[]): PreparedStatement {
        if (this.connection.isClosed) this.connection = DriverManager.getConnection(this.url)
        let statement = this.connection.prepareStatement(sql) as PreparedStatement
        parameters.forEach((parameter, i) => statement.setObject(i + 1, parameter))
        return statement
    }

    private indexName(columnNames: string[], unique: boolean): string {
        let indexName = unique ? "uidx" : "idx"
        columnNames.forEach(name => indexName += "_" + name.toLowerCase())
        return indexName
    }

    ensureTable(tableName: string) {
        this.execute(`CREATE TABLE IF NOT EXISTS ${tableName} (id VARCHAR(64))`, [])
    }

    ensureColumn(tableName: string, columnName: string, columnType: string) {
        let columns = this.list<Column>("desc " + tableName, [])
        let exists = columns.some(col => col.COLUMN_NAME == columnName)
        if (exists) return
        this.execute(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`, [])
    }

    ensureIndex(tableName: string, columnNames: string[]) {
        let indexName = this.indexName(columnNames, false)
        let indexColumns = ""
        columnNames.forEach(name => indexColumns += "," + name)
        this.execute(`CREATE INDEX IF NOT EXISTS ${indexName} ON ${tableName}(${indexColumns.substring(1)})`, [])
    }

    ensureUniqueIndex(tableName: string, columnNames: string[]) {
        let indexName = this.indexName(columnNames, true)
        let indexColumns = ""
        columnNames.forEach(name => indexColumns += "," + name)
        this.execute(`CREATE UNIQUE INDEX IF NOT EXISTS ${indexName} ON ${tableName}(${indexColumns.substring(1)})`, [])
    }

    one<T>(sql: string, parameters: any[]): T | null {
        let statement = this.prepareStatement("SELECT 0", [])
        try {
            statement.execute()
        } catch (_) {
        } finally {
            statement.close()
        }

        let result: T | null = null
        statement = this.prepareStatement(sql, parameters)
        try {
            let resultSet = statement.executeQuery()
            if (resultSet.next()) result = readAs<T>(resultSet)
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
        } catch (_) {
        } finally {
            statement.close()
        }

        let result: T[] = []
        statement = this.prepareStatement(sql, parameters)
        try {
            let resultSet = statement.executeQuery()
            while (resultSet.next()) result.push(readAs<T>(resultSet))
            resultSet.close()
        } finally {
            statement.close()
        }
        return result
    }

    save(tableName: string, json: any, primary: string) {
        let keys = ""
        let values = ""
        let parameters: any[] = []
        Object.keys(json).forEach(key => {
            keys += "," + key
            values += ",?"
            parameters.push(json[key])
        })
        this.connection.setAutoCommit(false)

        try {
            let sql = `DELETE FROM ${tableName} WHERE ${primary} = ?`
            this.execute(sql, [json[primary]])
            sql = `INSERT INTO ${tableName}(${keys.substring(1)}) VALUES(${values.substring(1)})`
            this.execute(sql, parameters)
            this.connection.commit()
        } catch (ex) {
            this.connection.rollback()
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

export default class MySQLConnection extends MySQLConnectionImpl {
    constructor(options: ConnectOptions) {
        super()
        this.url = String.format(
            "jdbc:mysql://%s:%d/%s?user=%s&password=%s&testOnBorrow=true",
            options.server, options.port, options.database, options.user, options.password
        )
        this.connection = DriverManager.getConnection(this.url)
    }
}
