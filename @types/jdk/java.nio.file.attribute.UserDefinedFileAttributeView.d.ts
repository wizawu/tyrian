declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {
        interface UserDefinedFileAttributeView extends java.nio.file.attribute.FileAttributeView {
          name(): java.lang.String
          list(): java.util.List<java.lang.String>
          size(arg0: java.lang.String | string): number
          read(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): number
          write(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): number
          delete(arg0: java.lang.String | string): void
        }
      }
    }
  }
}
