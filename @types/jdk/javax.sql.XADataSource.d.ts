declare namespace javax {
  namespace sql {

    interface XADataSource extends javax.sql.CommonDataSource {
      getXAConnection(): javax.sql.XAConnection
      getXAConnection(arg0: java.lang.String, arg1: java.lang.String): javax.sql.XAConnection
      getLogWriter(): java.io.PrintWriter
      setLogWriter(arg0: java.io.PrintWriter): void
      setLoginTimeout(arg0: int): void
      getLoginTimeout(): int
      createXAConnectionBuilder(): javax.sql.XAConnectionBuilder
    }

  }
}
