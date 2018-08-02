declare namespace java {
    namespace sql {
        interface SQLData {
            getSQLTypeName(): string
            readSQL(arg0: java.sql.SQLInput, arg1: java.lang.String | string): void
            writeSQL(arg0: java.sql.SQLOutput): void
        }
    }
}