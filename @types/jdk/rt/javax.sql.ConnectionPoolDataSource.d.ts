declare namespace javax {
    namespace sql {
        interface ConnectionPoolDataSource extends javax.sql.CommonDataSource {
            getPooledConnection(): javax.sql.PooledConnection
            getPooledConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.sql.PooledConnection
        }
    }
}