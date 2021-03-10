declare namespace java {
  namespace util {
    namespace zip {

      class DeflaterOutputStream extends java.io.FilterOutputStream {
        protected def: java.util.zip.Deflater
        protected buf: byte[]
        usesDefaultDeflater: boolean
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater, arg2: number | java.lang.Integer)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater, arg2: boolean | java.lang.Boolean)
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Deflater)
        public constructor(arg0: java.io.OutputStream, arg1: boolean | java.lang.Boolean)
        public constructor(arg0: java.io.OutputStream)
        public write(arg0: number | java.lang.Integer): void
        public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public finish(): void
        public close(): void
        protected deflate(): void
        public flush(): void
      }

    }
  }
}
