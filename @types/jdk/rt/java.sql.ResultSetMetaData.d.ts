declare namespace java {
    namespace sql {
interface ResultSetMetaData extends java.sql.Wrapper {
    columnNoNulls: int
    columnNullable: int
    columnNullableUnknown: int
    getColumnCount(): int
    isAutoIncrement(arg0: int): boolean
    isCaseSensitive(arg0: int): boolean
    isSearchable(arg0: int): boolean
    isCurrency(arg0: int): boolean
    isNullable(arg0: int): int
    isSigned(arg0: int): boolean
    getColumnDisplaySize(arg0: int): int
    getColumnLabel(arg0: int): string
    getColumnName(arg0: int): string
    getSchemaName(arg0: int): string
    getPrecision(arg0: int): int
    getScale(arg0: int): int
    getTableName(arg0: int): string
    getCatalogName(arg0: int): string
    getColumnType(arg0: int): int
    getColumnTypeName(arg0: int): string
    isReadOnly(arg0: int): boolean
    isWritable(arg0: int): boolean
    isDefinitelyWritable(arg0: int): boolean
    getColumnClassName(arg0: int): string
}

    }
}