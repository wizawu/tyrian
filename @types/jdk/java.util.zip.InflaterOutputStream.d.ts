declare namespace java {
  namespace util {
    namespace zip {

      class InflaterOutputStream extends java.io.FilterOutputStream {
        protected readonly inf: java.util.zip.Inflater
        protected readonly buf: byte[]
        public constructor(arg0: java.io.OutputStream)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Inflater)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Inflater, arg2: int)
        public close(): void
        public flush(): void
        public finish(): void
        public write(arg0: int): void
        public write(arg0: byte[], arg1: int, arg2: int): void
      }

    }
  }
}
