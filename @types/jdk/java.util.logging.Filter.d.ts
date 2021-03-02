declare namespace java {
  namespace util {
    namespace logging {

      interface Filter$$lambda {
        (arg0: java.util.logging.LogRecord): boolean
      }

      interface Filter {
        isLoggable(arg0: java.util.logging.LogRecord): boolean
      }

    }
  }
}
