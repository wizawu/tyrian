declare namespace java {
  namespace util {
    namespace logging {
      class StreamHandler extends java.util.logging.Handler {
        public constructor()
        public constructor(arg0: java.io.OutputStream, arg1: java.util.logging.Formatter)
        constructor(arg0: java.util.logging.Level, arg1: java.util.logging.Formatter, arg2: java.util.logging.Formatter)
        protected setOutputStream(arg0: java.io.OutputStream): void
        public setEncoding(arg0: java.lang.String | string): void
        public publish(arg0: java.util.logging.LogRecord): void
        public isLoggable(arg0: java.util.logging.LogRecord): boolean
        public flush(): void
        public close(): void
        setOutputStreamPrivileged(arg0: java.io.OutputStream): void
      }
    }
  }
}
