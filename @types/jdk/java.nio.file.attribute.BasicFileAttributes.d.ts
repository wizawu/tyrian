declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        interface BasicFileAttributes {
          lastModifiedTime(): java.nio.file.attribute.FileTime
          lastAccessTime(): java.nio.file.attribute.FileTime
          creationTime(): java.nio.file.attribute.FileTime
          isRegularFile(): boolean
          isDirectory(): boolean
          isSymbolicLink(): boolean
          isOther(): boolean
          size(): long
          fileKey(): java.lang.Object
        }

      }
    }
  }
}
