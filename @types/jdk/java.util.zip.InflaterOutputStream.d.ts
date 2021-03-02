declare namespace java {
  namespace util {
    namespace zip {

      class InflaterOutputStream extends java.io.FilterOutputStream {
        protected readonly inf: java.util.zip.Inflater
        protected readonly buf: byte[]
        public constructor(arg0: java.io.OutputStream)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Inflater)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Inflater, arg2: number | java.lang.Integer)
        public close(): void
        public flush(): void
        public finish(): void
        public write(arg0: number | java.lang.Integer): void
        public write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      }

    }
  }
}
