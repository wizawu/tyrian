package orsql

import java.sql.Connection
import java.sql.DriverManager
import java.sql.PreparedStatement
import java.util.*

data class ConnectOptions(
        val server: String,
        val port: Int,
        val database: String,
        val user: String,
        val password: String
)

private interface IConnection {
    fun ensureTable(tableName: String)
    fun ensureColumn(tableName: String, columnName: String, columnType: String)
    fun ensureIndex(tableName: String, columnNames: Array<String>)
    fun ensureUniqueIndex(tableName: String, columnNames: Array<String>)
    fun <T> one(type: Class<T>, sql: String, parameters: Array<Any>): T?
    fun <T> list(type: Class<T>, sql: String, parameters: Array<Any>): ArrayList<T>
    fun execute(sql: String, parameters: Array<Any>)
    fun close()
}

class MySQLConnection(options: ConnectOptions) : IConnection {
    var connection: Connection? = null

    private data class Column(val COLUMN_NAME: String)

    init {
        val url = String.format(
                "jdbc:mysql://%s:%d/%s?user=%s&password=%s",
                options.server, options.port, options.database, options.user, options.password
        )
        connection = DriverManager.getConnection(url)
    }

    private fun prepareStatement(sql: String, parameters: Array<Any>): PreparedStatement {
        val statement = connection!!.prepareStatement(sql)
        parameters.forEachIndexed { i, parameter -> statement.setObject(i + 1, parameter) }
        return statement
    }

    private fun indexName(columnNames: Array<String>, unique: Boolean): String {
        var indexName = if (unique) "uidx" else "idx"
        columnNames.forEach { name -> indexName += "_" + name.toLowerCase() }
        return indexName
    }

    override fun ensureTable(tableName: String) {
        execute(String.format("CREATE TABLE IF NOT EXISTS %s (id VARCHAR(64))", tableName), emptyArray())
    }

    override fun ensureColumn(tableName: String, columnName: String, columnType: String) {
        val columns = list(Column::class.java, "desc " + tableName, emptyArray())
        var exists = false
        columns.forEach { col -> exists = exists || col.COLUMN_NAME == columnName }
        if (exists) return
        execute(String.format("ALTER TABLE %s ADD COLUMN %s %s", tableName, columnName, columnType), emptyArray())
    }

    override fun ensureIndex(tableName: String, columnNames: Array<String>) {
        val indexName = indexName(columnNames, false)
        var indexColumns = ""
        columnNames.forEach { name -> indexColumns += "," + name }
        val sql = "CREATE INDEX IF NOT EXISTS %s ON %s (%s)"
        execute(String.format(sql, indexName, tableName, indexColumns.substring(1)), emptyArray())
    }

    override fun ensureUniqueIndex(tableName: String, columnNames: Array<String>) {
        val indexName = indexName(columnNames, true)
        var indexColumns = ""
        columnNames.forEach { name -> indexColumns += "," + name }
        val sql = "CREATE UNIQUE INDEX IF NOT EXISTS %s ON %s (%s)"
        execute(String.format(sql, indexName, tableName, indexColumns.substring(1)), emptyArray())
    }

    override fun <T> one(type: Class<T>, sql: String, parameters: Array<Any>): T? {
        var result: T? = null
        val statement = prepareStatement(sql, parameters)
        val resultSet = statement.executeQuery()
        if (resultSet != null) {
            if (resultSet.next()) result = readAs(type, resultSet)
            resultSet.close()
        }
        statement.close()
        return result
    }

    override fun <T> list(type: Class<T>, sql: String, parameters: Array<Any>): ArrayList<T> {
        val result = ArrayList<T>()
        val statement = prepareStatement(sql, parameters)
        val resultSet = statement.executeQuery()
        if (resultSet != null) {
            while (resultSet.next()) result.add(readAs(type, resultSet))
            resultSet.close()
        }
        statement.close()
        return result
    }

    override fun execute(sql: String, parameters: Array<Any>) {
        val statement = prepareStatement(sql, parameters)
        statement.executeUpdate()
        statement.close()
    }

    override fun close() {
        connection ?: connection!!.close()
    }
}
