declare namespace java {
  namespace nio {
    namespace file {
      abstract class FileSystem implements java.io.Closeable {
        protected constructor()
        public abstract provider(): java.nio.file.spi.FileSystemProvider
        public abstract close(): void
        public abstract isOpen(): boolean
        public abstract isReadOnly(): boolean
        public abstract getSeparator(): java.lang.String
        public abstract getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
        public abstract getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
        public abstract supportedFileAttributeViews(): java.util.Set<java.lang.String>
        public abstract getPath(
          arg0: java.lang.String | string,
          ...vargs: (java.lang.String | string)[]
        ): java.nio.file.Path
        public abstract getPathMatcher(arg0: java.lang.String | string): java.nio.file.PathMatcher
        public abstract getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
        public abstract newWatchService(): java.nio.file.WatchService
      }
    }
  }
}
