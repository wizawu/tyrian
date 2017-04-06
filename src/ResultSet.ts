type ResultSet = java.sql.ResultSet

export function readAs<T>(resultSet: ResultSet): T {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        let value = resultSet.getObject(i)
        json[key.toString()] = value
    }
    return json as T
}
