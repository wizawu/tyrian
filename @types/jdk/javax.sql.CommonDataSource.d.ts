declare namespace javax {
  namespace sql {
    interface CommonDataSource {
      getLogWriter(): java.io.PrintWriter
      setLogWriter(arg0: java.io.PrintWriter): void
      setLoginTimeout(arg0: number | java.lang.Integer): void
      getLoginTimeout(): number
      getParentLogger(): java.util.logging.Logger
      createShardingKeyBuilder?(): java.sql.ShardingKeyBuilder
    }
  }
}
