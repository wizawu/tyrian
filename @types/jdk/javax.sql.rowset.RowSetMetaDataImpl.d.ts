declare namespace javax {
  namespace sql {
    namespace rowset {
      class RowSetMetaDataImpl implements javax.sql.RowSetMetaData, java.io.Serializable {
        static readonly serialVersionUID: long
        public constructor()
        public setColumnCount(arg0: number | java.lang.Integer): void
        public setAutoIncrement(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        public setCaseSensitive(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        public setSearchable(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        public setCurrency(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        public setNullable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setSigned(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        public setColumnDisplaySize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setColumnLabel(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setColumnName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setSchemaName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setPrecision(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setScale(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setTableName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setCatalogName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setColumnType(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setColumnTypeName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public getColumnCount(): number
        public isAutoIncrement(arg0: number | java.lang.Integer): boolean
        public isCaseSensitive(arg0: number | java.lang.Integer): boolean
        public isSearchable(arg0: number | java.lang.Integer): boolean
        public isCurrency(arg0: number | java.lang.Integer): boolean
        public isNullable(arg0: number | java.lang.Integer): number
        public isSigned(arg0: number | java.lang.Integer): boolean
        public getColumnDisplaySize(arg0: number | java.lang.Integer): number
        public getColumnLabel(arg0: number | java.lang.Integer): java.lang.String
        public getColumnName(arg0: number | java.lang.Integer): java.lang.String
        public getSchemaName(arg0: number | java.lang.Integer): java.lang.String
        public getPrecision(arg0: number | java.lang.Integer): number
        public getScale(arg0: number | java.lang.Integer): number
        public getTableName(arg0: number | java.lang.Integer): java.lang.String
        public getCatalogName(arg0: number | java.lang.Integer): java.lang.String
        public getColumnType(arg0: number | java.lang.Integer): number
        public getColumnTypeName(arg0: number | java.lang.Integer): java.lang.String
        public isReadOnly(arg0: number | java.lang.Integer): boolean
        public isWritable(arg0: number | java.lang.Integer): boolean
        public isDefinitelyWritable(arg0: number | java.lang.Integer): boolean
        public getColumnClassName(arg0: number | java.lang.Integer): java.lang.String
        public unwrap<T>(arg0: java.lang.Class<T>): T
        public isWrapperFor(arg0: java.lang.Class<unknown>): boolean
      }
    }
  }
}
