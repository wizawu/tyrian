declare namespace javax {
  namespace sql {

    interface ConnectionPoolDataSource extends javax.sql.CommonDataSource {
      getPooledConnection(): javax.sql.PooledConnection
      getPooledConnection(arg0: java.lang.String, arg1: java.lang.String): javax.sql.PooledConnection
      getLogWriter(): java.io.PrintWriter
      setLogWriter(arg0: java.io.PrintWriter): void
      setLoginTimeout(arg0: int): void
      getLoginTimeout(): int
      createPooledConnectionBuilder(): javax.sql.PooledConnectionBuilder
    }

  }
}
