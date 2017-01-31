package orsql

import java.util.*

data class ConnectOptions(
        val server: String,
        val port: Int,
        val database: String,
        val user: String,
        val password: String
)

interface IConnection {
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
