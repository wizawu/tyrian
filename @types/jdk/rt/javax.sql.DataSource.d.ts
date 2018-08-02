declare namespace javax {
    namespace sql {
        interface DataSource extends javax.sql.CommonDataSource , java.sql.Wrapper {
            getConnection(): java.sql.Connection
            getConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): java.sql.Connection
        }
    }
}