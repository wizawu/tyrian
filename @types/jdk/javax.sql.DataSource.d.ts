declare namespace javax {
  namespace sql {

    interface DataSource extends javax.sql.CommonDataSource, java.sql.Wrapper {
      getConnection(): java.sql.Connection
      getConnection(arg0: java.lang.String, arg1: java.lang.String): java.sql.Connection
      getLogWriter(): java.io.PrintWriter
      setLogWriter(arg0: java.io.PrintWriter): void
      setLoginTimeout(arg0: int): void
      getLoginTimeout(): int
      createConnectionBuilder(): java.sql.ConnectionBuilder
    }

  }
}
