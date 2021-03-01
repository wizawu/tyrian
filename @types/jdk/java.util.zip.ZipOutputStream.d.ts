declare namespace java {
  namespace util {
    namespace zip {

      class ZipOutputStream extends java.util.zip.DeflaterOutputStream implements java.util.zip.ZipConstants {

        public static readonly STORED: int
        public static readonly DEFLATED: int
        public constructor(arg0: java.io.OutputStream)
        public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.Charset)
        public setComment(arg0: java.lang.String): void
        public setMethod(arg0: int): void
        public setLevel(arg0: int): void
        public putNextEntry(arg0: java.util.zip.ZipEntry): void
        public closeEntry(): void
        public write(arg0: byte[], arg1: int, arg2: int): void
        public finish(): void
        public close(): void
      }

    }
  }
}
