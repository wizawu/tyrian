export function resultSetToJSON<T>(resultSet: java.sql.ResultSet): T {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        let value = resultSet.getObject(i)
        json[key.toString()] = value
    }
    return json as T
}

export function log(exception: any) {
    if (exception.message) {
        (print as any)(exception.message)
    } else if (typeof exception === "string") {
        (print as any)(exception)
    }
}
