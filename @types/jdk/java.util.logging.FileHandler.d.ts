declare namespace java {
  namespace util {
    namespace logging {

      class FileHandler extends java.util.logging.StreamHandler {
        static readonly $assertionsDisabled: boolean
        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: boolean)
        public constructor(arg0: java.lang.String, arg1: int, arg2: int)
        public constructor(arg0: java.lang.String, arg1: int, arg2: int, arg3: boolean)
        public constructor(arg0: java.lang.String, arg1: long, arg2: int, arg3: boolean)
        static generate(arg0: java.lang.String, arg1: int, arg2: int, arg3: int): java.io.File
        public publish(arg0: java.util.logging.LogRecord): void
        public close(): void
      }

    }
  }
}
