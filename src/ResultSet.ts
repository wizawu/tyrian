const Gson = com.google.gson.Gson
const JSONObject = org.json.JSONObject
type ResultSet = java.sql.ResultSet

export function readAs<T>(resultSet: ResultSet): T {
    let json = new JSONObject()
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++)
    for (i in 1..resultSet.metaData.columnCount) {
        val key = resultSet.metaData.getColumnName(i)
        val value = resultSet.getObject(i)
        json.put(key, value)
    }
    return Gson().fromJson(json.toString(), type)
}
