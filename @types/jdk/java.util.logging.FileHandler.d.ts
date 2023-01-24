declare namespace java {
  namespace util {
    namespace logging {
      class FileHandler extends java.util.logging.StreamHandler {
        static readonly $assertionsDisabled: boolean
        public constructor()
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
        public constructor(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: boolean | java.lang.Boolean
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Integer,
          arg3: boolean | java.lang.Boolean
        )
        static generate(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.io.File
        public publish(arg0: java.util.logging.LogRecord): void
        public close(): void
      }
    }
  }
}
