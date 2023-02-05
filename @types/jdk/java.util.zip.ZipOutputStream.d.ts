declare namespace java {
  namespace util {
    namespace zip {
      class ZipOutputStream extends java.util.zip.DeflaterOutputStream implements java.util.zip.ZipConstants {
        public static readonly STORED: int
        public static readonly DEFLATED: int
        public constructor(arg0: java.io.OutputStream)
        public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.Charset)
        public setComment(arg0: java.lang.String | string): void
        public setMethod(arg0: number | java.lang.Integer): void
        public setLevel(arg0: number | java.lang.Integer): void
        public putNextEntry(arg0: java.util.zip.ZipEntry): void
        public closeEntry(): void
        public write(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public finish(): void
        public close(): void
      }
    }
  }
}
