declare namespace java {
  namespace util {
    namespace jar {

      interface Pack200$Packer {
        public static readonly SEGMENT_LIMIT: java.lang.String
        public static readonly KEEP_FILE_ORDER: java.lang.String
        public static readonly EFFORT: java.lang.String
        public static readonly DEFLATE_HINT: java.lang.String
        public static readonly MODIFICATION_TIME: java.lang.String
        public static readonly PASS_FILE_PFX: java.lang.String
        public static readonly UNKNOWN_ATTRIBUTE: java.lang.String
        public static readonly CLASS_ATTRIBUTE_PFX: java.lang.String
        public static readonly FIELD_ATTRIBUTE_PFX: java.lang.String
        public static readonly METHOD_ATTRIBUTE_PFX: java.lang.String
        public static readonly CODE_ATTRIBUTE_PFX: java.lang.String
        public static readonly PROGRESS: java.lang.String
        public static readonly KEEP: java.lang.String
        public static readonly PASS: java.lang.String
        public static readonly STRIP: java.lang.String
        public static readonly ERROR: java.lang.String
        public static readonly TRUE: java.lang.String
        public static readonly FALSE: java.lang.String
        public static readonly LATEST: java.lang.String
        properties(): java.util.SortedMap<java.lang.String,java.lang.String>
        pack(arg0: java.util.jar.JarFile, arg1: java.io.OutputStream): void
        pack(arg0: java.util.jar.JarInputStream, arg1: java.io.OutputStream): void
      }

    }
  }
}
