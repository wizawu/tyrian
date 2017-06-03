export function indexName(table: string, columns: string[], unique: boolean) {
    return `${table}_${unique ? "u" : ""}idx_${columns.join("_").toLowerCase()}`
}

export function resultSetToJSON(resultSet: java.sql.ResultSet) {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnName(i)
        json[key] = resultSet.getObject(i)
    }
    return json
}
