declare namespace javax {
    namespace sql {
        namespace rowset {
            class RowSetMetaDataImpl implements javax.sql.RowSetMetaData , java.io.Serializable {
                public constructor()
                public setColumnCount(arg0: int): void
                public setAutoIncrement(arg0: int, arg1: boolean): void
                public setCaseSensitive(arg0: int, arg1: boolean): void
                public setSearchable(arg0: int, arg1: boolean): void
                public setCurrency(arg0: int, arg1: boolean): void
                public setNullable(arg0: int, arg1: int): void
                public setSigned(arg0: int, arg1: boolean): void
                public setColumnDisplaySize(arg0: int, arg1: int): void
                public setColumnLabel(arg0: int, arg1: java.lang.String | string): void
                public setColumnName(arg0: int, arg1: java.lang.String | string): void
                public setSchemaName(arg0: int, arg1: java.lang.String | string): void
                public setPrecision(arg0: int, arg1: int): void
                public setScale(arg0: int, arg1: int): void
                public setTableName(arg0: int, arg1: java.lang.String | string): void
                public setCatalogName(arg0: int, arg1: java.lang.String | string): void
                public setColumnType(arg0: int, arg1: int): void
                public setColumnTypeName(arg0: int, arg1: java.lang.String | string): void
                public getColumnCount(): int
                public isAutoIncrement(arg0: int): boolean
                public isCaseSensitive(arg0: int): boolean
                public isSearchable(arg0: int): boolean
                public isCurrency(arg0: int): boolean
                public isNullable(arg0: int): int
                public isSigned(arg0: int): boolean
                public getColumnDisplaySize(arg0: int): int
                public getColumnLabel(arg0: int): string
                public getColumnName(arg0: int): string
                public getSchemaName(arg0: int): string
                public getPrecision(arg0: int): int
                public getScale(arg0: int): int
                public getTableName(arg0: int): string
                public getCatalogName(arg0: int): string
                public getColumnType(arg0: int): int
                public getColumnTypeName(arg0: int): string
                public isReadOnly(arg0: int): boolean
                public isWritable(arg0: int): boolean
                public isDefinitelyWritable(arg0: int): boolean
                public getColumnClassName(arg0: int): string
                public unwrap<T>(arg0: java.lang.Class<T>): T
                public isWrapperFor<T>(arg0: java.lang.Class<any>): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}