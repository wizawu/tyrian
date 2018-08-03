declare namespace java {
    namespace sql {
        class JDBCType extends java.lang.Enum<java.sql.JDBCType> implements java.sql.SQLType {
            public static readonly BIT: java.sql.JDBCType
            public static readonly TINYINT: java.sql.JDBCType
            public static readonly SMALLINT: java.sql.JDBCType
            public static readonly INTEGER: java.sql.JDBCType
            public static readonly BIGINT: java.sql.JDBCType
            public static readonly FLOAT: java.sql.JDBCType
            public static readonly REAL: java.sql.JDBCType
            public static readonly DOUBLE: java.sql.JDBCType
            public static readonly NUMERIC: java.sql.JDBCType
            public static readonly DECIMAL: java.sql.JDBCType
            public static readonly CHAR: java.sql.JDBCType
            public static readonly VARCHAR: java.sql.JDBCType
            public static readonly LONGVARCHAR: java.sql.JDBCType
            public static readonly DATE: java.sql.JDBCType
            public static readonly TIME: java.sql.JDBCType
            public static readonly TIMESTAMP: java.sql.JDBCType
            public static readonly BINARY: java.sql.JDBCType
            public static readonly VARBINARY: java.sql.JDBCType
            public static readonly LONGVARBINARY: java.sql.JDBCType
            public static readonly NULL: java.sql.JDBCType
            public static readonly OTHER: java.sql.JDBCType
            public static readonly JAVA_OBJECT: java.sql.JDBCType
            public static readonly DISTINCT: java.sql.JDBCType
            public static readonly STRUCT: java.sql.JDBCType
            public static readonly ARRAY: java.sql.JDBCType
            public static readonly BLOB: java.sql.JDBCType
            public static readonly CLOB: java.sql.JDBCType
            public static readonly REF: java.sql.JDBCType
            public static readonly DATALINK: java.sql.JDBCType
            public static readonly BOOLEAN: java.sql.JDBCType
            public static readonly ROWID: java.sql.JDBCType
            public static readonly NCHAR: java.sql.JDBCType
            public static readonly NVARCHAR: java.sql.JDBCType
            public static readonly LONGNVARCHAR: java.sql.JDBCType
            public static readonly NCLOB: java.sql.JDBCType
            public static readonly SQLXML: java.sql.JDBCType
            public static readonly REF_CURSOR: java.sql.JDBCType
            public static readonly TIME_WITH_TIMEZONE: java.sql.JDBCType
            public static readonly TIMESTAMP_WITH_TIMEZONE: java.sql.JDBCType
            public static values(): java.sql.JDBCType[]
            public static valueOf(arg0: java.lang.String | string): java.sql.JDBCType
            public getName(): string
            public getVendor(): string
            public getVendorTypeNumber(): java.lang.Integer
            public static valueOf(arg0: int): java.sql.JDBCType
            public static class: java.lang.Class<any>
        }
    }
}