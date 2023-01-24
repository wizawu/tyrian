declare namespace java {
  namespace nio {
    namespace file {
      interface FileVisitor<T> {
        preVisitDirectory(arg0: T, arg1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
        visitFile(arg0: T, arg1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
        visitFileFailed(arg0: T, arg1: java.io.IOException): java.nio.file.FileVisitResult
        postVisitDirectory(arg0: T, arg1: java.io.IOException): java.nio.file.FileVisitResult
      }
    }
  }
}
