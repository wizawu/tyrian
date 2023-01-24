declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {
        interface DosFileAttributeView extends java.nio.file.attribute.BasicFileAttributeView {
          name(): java.lang.String
          readAttributes(): java.nio.file.attribute.DosFileAttributes
          setReadOnly(arg0: boolean | java.lang.Boolean): void
          setHidden(arg0: boolean | java.lang.Boolean): void
          setSystem(arg0: boolean | java.lang.Boolean): void
          setArchive(arg0: boolean | java.lang.Boolean): void
          readAttributes(): java.nio.file.attribute.BasicFileAttributes
        }
      }
    }
  }
}
