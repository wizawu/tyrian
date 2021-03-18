declare namespace java {
  namespace util {
    namespace logging {

      interface Filter$$lambda {
        (arg0: java.util.logging.LogRecord): boolean | java.lang.Boolean
      }

      interface Filter {
        isLoggable(arg0: java.util.logging.LogRecord): boolean
      }

    }
  }
}
