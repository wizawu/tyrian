declare namespace java {
  namespace util {
    namespace zip {
      class CheckedOutputStream extends java.io.FilterOutputStream {
        public constructor(arg0: java.io.OutputStream, arg1: java.util.zip.Checksum)
        public write(arg0: number | java.lang.Integer): void
        public write(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public getChecksum(): java.util.zip.Checksum
      }
    }
  }
}
