declare namespace javax {
  namespace sql {
    interface RowSetMetaData extends java.sql.ResultSetMetaData {
      setColumnCount(arg0: number | java.lang.Integer): void
      setAutoIncrement(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setCaseSensitive(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setSearchable(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setCurrency(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setNullable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setSigned(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setColumnDisplaySize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setColumnLabel(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setColumnName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setSchemaName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setPrecision(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setScale(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setTableName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setCatalogName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setColumnType(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setColumnTypeName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
    }
  }
}
