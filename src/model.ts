const RowMapper = Java.type("org.springframework.jdbc.core.RowMapper")

namespace tooq {
    export interface ModelOptions {
        tableName: string
        indexes: string[][]
        uniqueIndexes: string[][]
        fullTextIndexes: string[][]
    }

    export abstract class Model {
        protected PrimaryKey(columType: string) {
            return ""
        }

        protected Array(columType: string | null) {
            return []
        }

        protected Boolean(columType: string | null) {
            return false
        }

        protected Number(columType: string | null) {
            return 0
        }

        protected Object(columType: string | null) {
            return null as any
        }

        protected String(columType: string | null) {
            return ""
        }

        merge(json: object): Model {
            Object.keys(this).forEach(key => {
                if (json[key] !== undefined) this[key] = json[key]
            })
            return this
        }

        createTable() { }

        constructor(options?: ModelOptions) {
            if (options)  {
                this.PrimaryKey = this.Array = this.Boolean = this.Number = this.Object = this.String
            }
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
}
