declare namespace javax {
    namespace sql {
        interface XADataSource extends javax.sql.CommonDataSource {
            getXAConnection(): javax.sql.XAConnection
            getXAConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.sql.XAConnection
        }
    }
}