declare namespace java {
  namespace util {
    namespace logging {

      class MemoryHandler extends java.util.logging.Handler {

        start: int
        count: int
        public constructor()
        public constructor(arg0: java.util.logging.Handler, arg1: int, arg2: java.util.logging.Level)
        public publish(arg0: java.util.logging.LogRecord): void
        public push(): void
        public flush(): void
        public close(): void
        public setPushLevel(arg0: java.util.logging.Level): void
        public getPushLevel(): java.util.logging.Level
        public isLoggable(arg0: java.util.logging.LogRecord): boolean
      }

    }
  }
}
