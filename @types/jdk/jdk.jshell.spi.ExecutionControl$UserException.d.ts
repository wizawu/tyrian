declare namespace jdk {
  namespace jshell {
    namespace spi {
      class ExecutionControl$UserException extends jdk.jshell.spi.ExecutionControl$RunException {
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.StackTraceElement[]
        )
        public causeExceptionClass(): java.lang.String
      }
    }
  }
}
