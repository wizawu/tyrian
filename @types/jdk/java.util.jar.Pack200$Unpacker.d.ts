declare namespace java {
  namespace util {
    namespace jar {

      interface Pack200$Unpacker {
        public static readonly KEEP: java.lang.String
        public static readonly TRUE: java.lang.String
        public static readonly FALSE: java.lang.String
        public static readonly DEFLATE_HINT: java.lang.String
        public static readonly PROGRESS: java.lang.String
        properties(): java.util.SortedMap<java.lang.String,java.lang.String>
        unpack(arg0: java.io.InputStream, arg1: java.util.jar.JarOutputStream): void
        unpack(arg0: java.io.File, arg1: java.util.jar.JarOutputStream): void
      }

    }
  }
}
