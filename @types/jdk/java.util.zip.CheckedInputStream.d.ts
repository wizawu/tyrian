declare namespace java {
  namespace util {
    namespace zip {

      class CheckedInputStream extends java.io.FilterInputStream {
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Checksum)
        public read(): int
        public read(arg0: byte[], arg1: int, arg2: int): int
        public skip(arg0: long): long
        public getChecksum(): java.util.zip.Checksum
      }

    }
  }
}
