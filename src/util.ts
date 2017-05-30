export function resultSetToJSON<T>(resultSet: java.sql.ResultSet): T {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        json[key] = resultSet.getObject(i)
    }
    return json as T
}
