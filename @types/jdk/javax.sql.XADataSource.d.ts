declare namespace javax {
  namespace sql {
    interface XADataSource extends javax.sql.CommonDataSource {
      getXAConnection(): javax.sql.XAConnection
      getXAConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.sql.XAConnection
      getLogWriter(): java.io.PrintWriter
      setLogWriter(arg0: java.io.PrintWriter): void
      setLoginTimeout(arg0: number | java.lang.Integer): void
      getLoginTimeout(): number
      createXAConnectionBuilder?(): javax.sql.XAConnectionBuilder
    }
  }
}
