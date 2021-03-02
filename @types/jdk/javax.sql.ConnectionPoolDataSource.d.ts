declare namespace javax {
  namespace sql {

    interface ConnectionPoolDataSource extends javax.sql.CommonDataSource {
      getPooledConnection(): javax.sql.PooledConnection
      getPooledConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.sql.PooledConnection
      getLogWriter(): java.io.PrintWriter
      setLogWriter(arg0: java.io.PrintWriter): void
      setLoginTimeout(arg0: number | java.lang.Integer): void
      getLoginTimeout(): number
      createPooledConnectionBuilder(): javax.sql.PooledConnectionBuilder
    }

  }
}
