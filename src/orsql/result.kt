package orsql

import java.sql.ResultSet
import org.json.JSONObject
import com.google.gson.Gson

fun <T> readAs(type: Class<T>, resultSet: ResultSet): T {
    val json = JSONObject()
    for (i in 1..resultSet.metaData.columnCount) {
        val key = resultSet.metaData.getColumnName(i)
        val value = resultSet.getObject(i)
        json.put(key, value)
    }
    return Gson().fromJson(json.toString(), type)
}
