declare namespace java {
  namespace util {
    namespace zip {
      class InflaterInputStream extends java.io.FilterInputStream {
        protected inf: java.util.zip.Inflater
        protected buf: byte[]
        protected len: int
        usesDefaultInflater: boolean
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Inflater, arg2: number | java.lang.Integer)
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Inflater)
        public constructor(arg0: java.io.InputStream)
        public read(): number
        public read(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public available(): number
        public skip(arg0: number | java.lang.Long): number
        public close(): void
        protected fill(): void
        public markSupported(): boolean
        public mark(arg0: number | java.lang.Integer): void
        public reset(): void
      }
    }
  }
}
