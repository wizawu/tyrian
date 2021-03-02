declare namespace java {
  namespace util {
    namespace zip {

      class GZIPOutputStream extends java.util.zip.DeflaterOutputStream {
        protected crc: java.util.zip.CRC32
        public constructor(arg0: java.io.OutputStream, arg1: number | java.lang.Integer)
        public constructor(arg0: java.io.OutputStream, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean)
        public constructor(arg0: java.io.OutputStream)
        public constructor(arg0: java.io.OutputStream, arg1: boolean | java.lang.Boolean)
        public write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public finish(): void
      }

    }
  }
}
