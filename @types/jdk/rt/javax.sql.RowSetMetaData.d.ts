declare namespace javax {
    namespace sql {
interface RowSetMetaData extends java.sql.ResultSetMetaData {
    setColumnCount(arg0: int): void
    setAutoIncrement(arg0: int, arg1: boolean): void
    setCaseSensitive(arg0: int, arg1: boolean): void
    setSearchable(arg0: int, arg1: boolean): void
    setCurrency(arg0: int, arg1: boolean): void
    setNullable(arg0: int, arg1: int): void
    setSigned(arg0: int, arg1: boolean): void
    setColumnDisplaySize(arg0: int, arg1: int): void
    setColumnLabel(arg0: int, arg1: java.lang.String | string): void
    setColumnName(arg0: int, arg1: java.lang.String | string): void
    setSchemaName(arg0: int, arg1: java.lang.String | string): void
    setPrecision(arg0: int, arg1: int): void
    setScale(arg0: int, arg1: int): void
    setTableName(arg0: int, arg1: java.lang.String | string): void
    setCatalogName(arg0: int, arg1: java.lang.String | string): void
    setColumnType(arg0: int, arg1: int): void
    setColumnTypeName(arg0: int, arg1: java.lang.String | string): void
}

    }
}