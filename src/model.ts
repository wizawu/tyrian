const RowMapper = Java.type("org.springframework.jdbc.core.RowMapper")

export const BIGINT = "BIGINT"
export const BOOL = "BOOL"
export const DOUBLE = "DOUBLE"
export const TEXT = "TEXT"
export const VARCHAR = (length: number) => `VARCHAR(${length})`

export abstract class Model {
    protected ARRAY() {
        return []
    }
    protected BOOLEAN() {
        return false
    }
    protected NUMBER() {
        return 0
    }
    protected OBJECT() {
        return null as any
    }
    protected STRING() {
        return ""
    }
    from(json: object): Model {
        Object.keys(this).forEach(key => this[key] = json[key] === undefined ? this[key] : json[key])
        return this
    }
}

export const rowMapper = new RowMapper((resultSet: java.sql.ResultSet) => {
    let json: any = {}
    for (let i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        let key = resultSet.getMetaData().getColumnLabel(i)
        let type = resultSet.getMetaData().getColumnTypeName(i)
        if (resultSet.getObject(i) == null) {
            json[key] = null
        } else if (type.toUpperCase() === "JSON") {
            json[key] = JSON.parse(resultSet.getString(i))
        } else {
            json[key] = resultSet.getObject(i)
        }
    }
    return json
})
