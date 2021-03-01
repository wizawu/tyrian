declare namespace java {
  namespace util {
    namespace logging {

      class LogRecord implements java.io.Serializable {

        public constructor(arg0: java.util.logging.Level, arg1: java.lang.String)
        public getLoggerName(): java.lang.String
        public setLoggerName(arg0: java.lang.String): void
        public getResourceBundle(): java.util.ResourceBundle
        public setResourceBundle(arg0: java.util.ResourceBundle): void
        public getResourceBundleName(): java.lang.String
        public setResourceBundleName(arg0: java.lang.String): void
        public getLevel(): java.util.logging.Level
        public setLevel(arg0: java.util.logging.Level): void
        public getSequenceNumber(): long
        public setSequenceNumber(arg0: long): void
        public getSourceClassName(): java.lang.String
        public setSourceClassName(arg0: java.lang.String): void
        public getSourceMethodName(): java.lang.String
        public setSourceMethodName(arg0: java.lang.String): void
        public getMessage(): java.lang.String
        public setMessage(arg0: java.lang.String): void
        public getParameters(): java.lang.Object[]
        public setParameters(arg0: java.lang.Object[]): void
        public getThreadID(): int
        public setThreadID(arg0: int): void
        public getMillis(): long
        public setMillis(arg0: long): void
        public getInstant(): java.time.Instant
        public setInstant(arg0: java.time.Instant): void
        public getThrown(): java.lang.Throwable
        public setThrown(arg0: java.lang.Throwable): void
      }

    }
  }
}
