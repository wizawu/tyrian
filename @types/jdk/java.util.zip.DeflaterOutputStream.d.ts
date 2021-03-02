declare namespace java {
  namespace util {
    namespace zip {

      class DeflaterOutputStream extends java.io.FilterOutputStream {
        protected def: java.util.zip.Deflater
        protected buf: byte[]
        usesDefaultDeflater: boolean
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater, arg2: int, arg3: boolean)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater, arg2: int)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater, arg2: boolean)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater)
        public constructor(arg0: java.io.OutputStream, arg1: boolean)
        public constructor(arg0: java.io.OutputStream)
        public write(arg0: int): void
        public write(arg0: byte[], arg1: int, arg2: int): void
        public finish(): void
        public close(): void
        protected deflate(): void
        public flush(): void
      }

    }
  }
}
