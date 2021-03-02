declare namespace java {
  namespace sql {

    interface ResultSetMetaData extends java.sql.Wrapper {
      public static readonly columnNoNulls: int
      public static readonly columnNullable: int
      public static readonly columnNullableUnknown: int
      getColumnCount(): int
      isAutoIncrement(arg0: int): boolean
      isCaseSensitive(arg0: int): boolean
      isSearchable(arg0: int): boolean
      isCurrency(arg0: int): boolean
      isNullable(arg0: int): int
      isSigned(arg0: int): boolean
      getColumnDisplaySize(arg0: int): int
      getColumnLabel(arg0: int): java.lang.String
      getColumnName(arg0: int): java.lang.String
      getSchemaName(arg0: int): java.lang.String
      getPrecision(arg0: int): int
      getScale(arg0: int): int
      getTableName(arg0: int): java.lang.String
      getCatalogName(arg0: int): java.lang.String
      getColumnType(arg0: int): int
      getColumnTypeName(arg0: int): java.lang.String
      isReadOnly(arg0: int): boolean
      isWritable(arg0: int): boolean
      isDefinitelyWritable(arg0: int): boolean
      getColumnClassName(arg0: int): java.lang.String
    }

  }
}
