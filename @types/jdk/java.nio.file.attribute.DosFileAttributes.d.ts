declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        interface DosFileAttributes extends java.nio.file.attribute.BasicFileAttributes {

          isReadOnly(): boolean
          isHidden(): boolean
          isArchive(): boolean
          isSystem(): boolean
        }

      }
    }
  }
}
