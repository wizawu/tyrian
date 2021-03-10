declare namespace java {
  namespace util {
    namespace zip {

      class ZipInputStream extends java.util.zip.InflaterInputStream implements java.util.zip.ZipConstants {
        public constructor(arg0: java.io.InputStream)
        public constructor(arg0: java.io.InputStream, arg1: java.nio.charset.Charset)
        public getNextEntry(): java.util.zip.ZipEntry
        public closeEntry(): void
        public available(): number
        public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public skip(arg0: number | java.lang.Long): number
        public close(): void
        protected createZipEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
      }

    }
  }
}
