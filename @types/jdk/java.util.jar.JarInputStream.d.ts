declare namespace java {
  namespace util {
    namespace jar {
      class JarInputStream extends java.util.zip.ZipInputStream {
        public constructor(arg0: java.io.InputStream)
        public constructor(arg0: java.io.InputStream, arg1: boolean | java.lang.Boolean)
        public getManifest(): java.util.jar.Manifest
        public getNextEntry(): java.util.zip.ZipEntry
        public getNextJarEntry(): java.util.jar.JarEntry
        public read(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        protected createZipEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
      }
    }
  }
}
