declare namespace java {
  namespace util {
    namespace jar {
      interface Pack200$Unpacker {
        readonly KEEP: java.lang.String
        readonly TRUE: java.lang.String
        readonly FALSE: java.lang.String
        readonly DEFLATE_HINT: java.lang.String
        readonly PROGRESS: java.lang.String
        properties(): java.util.SortedMap<java.lang.String, java.lang.String>
        unpack(arg0: java.io.InputStream, arg1: java.util.jar.JarOutputStream): void
        unpack(arg0: java.io.File, arg1: java.util.jar.JarOutputStream): void
      }
    }
  }
}
