declare namespace java {
  namespace util {
    namespace zip {

      class CheckedInputStream extends java.io.FilterInputStream {
        public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Checksum)
        public read(): number
        public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public skip(arg0: number | java.lang.Long): number
        public getChecksum(): java.util.zip.Checksum
      }

    }
  }
}
