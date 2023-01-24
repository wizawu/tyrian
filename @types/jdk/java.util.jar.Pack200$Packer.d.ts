declare namespace java {
  namespace util {
    namespace jar {
      interface Pack200$Packer {
        readonly SEGMENT_LIMIT: java.lang.String
        readonly KEEP_FILE_ORDER: java.lang.String
        readonly EFFORT: java.lang.String
        readonly DEFLATE_HINT: java.lang.String
        readonly MODIFICATION_TIME: java.lang.String
        readonly PASS_FILE_PFX: java.lang.String
        readonly UNKNOWN_ATTRIBUTE: java.lang.String
        readonly CLASS_ATTRIBUTE_PFX: java.lang.String
        readonly FIELD_ATTRIBUTE_PFX: java.lang.String
        readonly METHOD_ATTRIBUTE_PFX: java.lang.String
        readonly CODE_ATTRIBUTE_PFX: java.lang.String
        readonly PROGRESS: java.lang.String
        readonly KEEP: java.lang.String
        readonly PASS: java.lang.String
        readonly STRIP: java.lang.String
        readonly ERROR: java.lang.String
        readonly TRUE: java.lang.String
        readonly FALSE: java.lang.String
        readonly LATEST: java.lang.String
        properties(): java.util.SortedMap<java.lang.String, java.lang.String>
        pack(arg0: java.util.jar.JarFile, arg1: java.io.OutputStream): void
        pack(arg0: java.util.jar.JarInputStream, arg1: java.io.OutputStream): void
      }
    }
  }
}
