declare namespace java {
  namespace util {
    namespace zip {

      class InflaterInputStream extends java.io.FilterInputStream {

        protected inf: java.util.zip.Inflater
        protected buf: byte[]
        protected len: int
        usesDefaultInflater: boolean
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Inflater, arg2: int)
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Inflater)
        public constructor(arg0: java.io.InputStream)
        public read(): int
        public read(arg0: byte[], arg1: int, arg2: int): int
        public available(): int
        public skip(arg0: long): long
        public close(): void
        protected fill(): void
        public markSupported(): boolean
        public mark(arg0: int): void
        public reset(): void
      }

    }
  }
}
