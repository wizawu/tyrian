declare namespace java {
  namespace nio {
    namespace file {
      namespace spi {

        abstract class FileSystemProvider {
          protected constructor()
          public static installedProviders(): java.util.List<java.nio.file.spi.FileSystemProvider>
          public abstract getScheme(): java.lang.String
          public abstract newFileSystem(arg0: java.net.URI, arg1: java.util.Map<java.lang.String,unknown>): java.nio.file.FileSystem
          public abstract getFileSystem(arg0: java.net.URI): java.nio.file.FileSystem
          public abstract getPath(arg0: java.net.URI): java.nio.file.Path
          public newFileSystem(arg0: java.nio.file.Path, arg1: java.util.Map<java.lang.String,unknown>): java.nio.file.FileSystem
          public newInputStream(arg0: java.nio.file.Path, ...vargs: (java.nio.file.OpenOption)[]): java.io.InputStream
          public newOutputStream(arg0: java.nio.file.Path, ...vargs: (java.nio.file.OpenOption)[]): java.io.OutputStream
          public newFileChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...vargs: (java.nio.file.attribute.FileAttribute<unknown>)[]): java.nio.channels.FileChannel
          public newAsynchronousFileChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, arg2: java.util.concurrent.ExecutorService, ...vargs: (java.nio.file.attribute.FileAttribute<unknown>)[]): java.nio.channels.AsynchronousFileChannel
          public abstract newByteChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...vargs: (java.nio.file.attribute.FileAttribute<unknown>)[]): java.nio.channels.SeekableByteChannel
          public abstract newDirectoryStream(arg0: java.nio.file.Path, arg1: java.nio.file.DirectoryStream$Filter<unknown> | java.nio.file.DirectoryStream$Filter$$lambda<unknown>): java.nio.file.DirectoryStream<java.nio.file.Path>
          public abstract createDirectory(arg0: java.nio.file.Path, ...vargs: (java.nio.file.attribute.FileAttribute<unknown>)[]): void
          public createSymbolicLink(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...vargs: (java.nio.file.attribute.FileAttribute<unknown>)[]): void
          public createLink(arg0: java.nio.file.Path, arg1: java.nio.file.Path): void
          public abstract delete(arg0: java.nio.file.Path): void
          public deleteIfExists(arg0: java.nio.file.Path): boolean
          public readSymbolicLink(arg0: java.nio.file.Path): java.nio.file.Path
          public abstract copy(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...vargs: (java.nio.file.CopyOption)[]): void
          public abstract move(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...vargs: (java.nio.file.CopyOption)[]): void
          public abstract isSameFile(arg0: java.nio.file.Path, arg1: java.nio.file.Path): boolean
          public abstract isHidden(arg0: java.nio.file.Path): boolean
          public abstract getFileStore(arg0: java.nio.file.Path): java.nio.file.FileStore
          public abstract checkAccess(arg0: java.nio.file.Path, ...vargs: (java.nio.file.AccessMode)[]): void
          public abstract getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.Class<V>, ...vargs: (java.nio.file.LinkOption)[]): V
          public abstract readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...vargs: (java.nio.file.LinkOption)[]): A
          public abstract readAttributes(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...vargs: (java.nio.file.LinkOption)[]): java.util.Map<java.lang.String,java.lang.Object>
          public abstract setAttribute(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.Object | any, ...vargs: (java.nio.file.LinkOption)[]): void
        }

      }
    }
  }
}
