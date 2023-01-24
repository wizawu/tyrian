declare namespace java {
  namespace util {
    namespace jar {
      class JarOutputStream extends java.util.zip.ZipOutputStream {
        public constructor(arg0: java.io.OutputStream, arg1: java.util.jar.Manifest)
        public constructor(arg0: java.io.OutputStream)
        public putNextEntry(arg0: java.util.zip.ZipEntry): void
      }
    }
  }
}
