package orsql

import com.google.gson.Gson
import org.json.JSONObject
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
    fun save(tableName: String, obj: Any, primary: String)
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
        execute("CREATE TABLE IF NOT EXISTS $tableName (id VARCHAR(64))", emptyArray())
    }

    override fun ensureColumn(tableName: String, columnName: String, columnType: String) {
        val columns = list(Column::class.java, "desc " + tableName, emptyArray())
        var exists = false
        columns.forEach { col -> exists = exists || col.COLUMN_NAME == columnName }
        if (exists) return
        execute("ALTER TABLE $tableName ADD COLUMN $columnName $columnType", emptyArray())
    }

    override fun ensureIndex(tableName: String, columnNames: Array<String>) {
        val indexName = indexName(columnNames, false)
        var indexColumns = ""
        columnNames.forEach { name -> indexColumns += "," + name }
        execute("CREATE INDEX IF NOT EXISTS $indexName ON $tableName(${indexColumns.substring(1)})", emptyArray())
    }

    override fun ensureUniqueIndex(tableName: String, columnNames: Array<String>) {
        val indexName = indexName(columnNames, true)
        var indexColumns = ""
        columnNames.forEach { name -> indexColumns += "," + name }
        execute("CREATE UNIQUE INDEX IF NOT EXISTS $indexName ON $tableName(${indexColumns.substring(1)})", emptyArray())
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

    override fun save(tableName: String, obj: Any, primary: String) {
        val json = JSONObject(Gson().toJson(obj))
        var keys = ""
        var values = ""
        val parameters = ArrayList<Any>()
        json.keys().forEach { key ->
            keys += ",$key"
            values += ",?"
            parameters.add(json[key])
        }
        var sql = "DELETE FROM $tableName WHERE $primary = ?"
        execute(sql, arrayOf(json[primary]))
        sql = "INSERT INTO $tableName(${keys.substring(1)}) VALUES(${values.substring(1)})"
        execute(sql, parameters.toTypedArray())
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
