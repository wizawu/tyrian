declare namespace java {
  namespace sql {
    interface ResultSetMetaData extends java.sql.Wrapper {
      readonly columnNoNulls: int
      readonly columnNullable: int
      readonly columnNullableUnknown: int
      getColumnCount(): number
      isAutoIncrement(arg0: number | java.lang.Integer): boolean
      isCaseSensitive(arg0: number | java.lang.Integer): boolean
      isSearchable(arg0: number | java.lang.Integer): boolean
      isCurrency(arg0: number | java.lang.Integer): boolean
      isNullable(arg0: number | java.lang.Integer): number
      isSigned(arg0: number | java.lang.Integer): boolean
      getColumnDisplaySize(arg0: number | java.lang.Integer): number
      getColumnLabel(arg0: number | java.lang.Integer): java.lang.String
      getColumnName(arg0: number | java.lang.Integer): java.lang.String
      getSchemaName(arg0: number | java.lang.Integer): java.lang.String
      getPrecision(arg0: number | java.lang.Integer): number
      getScale(arg0: number | java.lang.Integer): number
      getTableName(arg0: number | java.lang.Integer): java.lang.String
      getCatalogName(arg0: number | java.lang.Integer): java.lang.String
      getColumnType(arg0: number | java.lang.Integer): number
      getColumnTypeName(arg0: number | java.lang.Integer): java.lang.String
      isReadOnly(arg0: number | java.lang.Integer): boolean
      isWritable(arg0: number | java.lang.Integer): boolean
      isDefinitelyWritable(arg0: number | java.lang.Integer): boolean
      getColumnClassName(arg0: number | java.lang.Integer): java.lang.String
    }
  }
}
