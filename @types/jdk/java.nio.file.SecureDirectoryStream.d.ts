declare namespace java {
  namespace nio {
    namespace file {
      interface SecureDirectoryStream<T> extends java.nio.file.DirectoryStream<T> {
        newDirectoryStream(arg0: T, ...vargs: java.nio.file.LinkOption[]): java.nio.file.SecureDirectoryStream<T>
        newByteChannel(
          arg0: T,
          arg1: java.util.Set<java.nio.file.OpenOption>,
          ...vargs: java.nio.file.attribute.FileAttribute<unknown>[]
        ): java.nio.channels.SeekableByteChannel
        deleteFile(arg0: T): void
        deleteDirectory(arg0: T): void
        move(arg0: T, arg1: java.nio.file.SecureDirectoryStream<T>, arg2: T): void
        getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Class<V>): V
        getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(
          arg0: T,
          arg1: java.lang.Class<V>,
          ...vargs: java.nio.file.LinkOption[]
        ): V
      }
    }
  }
}
