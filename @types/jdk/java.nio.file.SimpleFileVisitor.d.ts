declare namespace java {
  namespace nio {
    namespace file {
      class SimpleFileVisitor<T> implements java.nio.file.FileVisitor<T> {
        protected constructor()
        public preVisitDirectory(
          arg0: T,
          arg1: java.nio.file.attribute.BasicFileAttributes
        ): java.nio.file.FileVisitResult
        public visitFile(arg0: T, arg1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
        public visitFileFailed(arg0: T, arg1: java.io.IOException): java.nio.file.FileVisitResult
        public postVisitDirectory(arg0: T, arg1: java.io.IOException): java.nio.file.FileVisitResult
      }
    }
  }
}
