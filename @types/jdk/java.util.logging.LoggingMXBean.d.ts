declare namespace java {
  namespace util {
    namespace logging {

      interface LoggingMXBean {
        getLoggerNames(): java.util.List<java.lang.String>
        getLoggerLevel(arg0: java.lang.String | string): java.lang.String
        setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        getParentLoggerName(arg0: java.lang.String | string): java.lang.String
      }

    }
  }
}
