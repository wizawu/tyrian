declare namespace java {
  namespace util {
    namespace logging {

      interface LoggingMXBean {
        getLoggerNames(): java.util.List<java.lang.String>
        getLoggerLevel(arg0: java.lang.String): java.lang.String
        setLoggerLevel(arg0: java.lang.String, arg1: java.lang.String): void
        getParentLoggerName(arg0: java.lang.String): java.lang.String
      }

    }
  }
}
