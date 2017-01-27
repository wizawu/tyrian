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

interface IConnection {
    fun <T> one(type: Class<T>, sql: String, parameters: Array<Any>): T?
    fun <T> list(type: Class<T>, sql: String, parameters: Array<Any>): ArrayList<T>
    fun execute(sql: String, parameters: Array<Any>)
    fun close()
}

class MySQLConnection(options: ConnectOptions) : IConnection {
    var connection: Connection? = null

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

    override fun close() {
        connection ?: connection!!.close()
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
}
