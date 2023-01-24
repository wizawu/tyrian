declare namespace java {
  namespace util {
    namespace zip {
      class DeflaterInputStream extends java.io.FilterInputStream {
        protected readonly def: java.util.zip.Deflater
        protected readonly buf: byte[]
        public constructor(arg0: java.io.InputStream)
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Deflater)
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Deflater, arg2: number | java.lang.Integer)
        public close(): void
        public read(): number
        public read(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public skip(arg0: number | java.lang.Long): number
        public available(): number
        public markSupported(): boolean
        public mark(arg0: number | java.lang.Integer): void
        public reset(): void
      }
    }
  }
}
