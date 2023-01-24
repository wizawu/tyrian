declare namespace java {
  namespace nio {
    namespace file {
      interface Path
        extends java.lang.Comparable<java.nio.file.Path>,
          java.lang.Iterable<java.nio.file.Path>,
          java.nio.file.Watchable {
        of(arg0: java.lang.String | string, ...vargs: (java.lang.String | string)[]): java.nio.file.Path
        of(arg0: java.net.URI): java.nio.file.Path
        getFileSystem(): java.nio.file.FileSystem
        isAbsolute(): boolean
        getRoot(): java.nio.file.Path
        getFileName(): java.nio.file.Path
        getParent(): java.nio.file.Path
        getNameCount(): number
        getName(arg0: number | java.lang.Integer): java.nio.file.Path
        subpath(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.nio.file.Path
        startsWith(arg0: java.nio.file.Path): boolean
        startsWith(arg0: java.lang.String | string): boolean
        endsWith(arg0: java.nio.file.Path): boolean
        endsWith(arg0: java.lang.String | string): boolean
        normalize(): java.nio.file.Path
        resolve(arg0: java.nio.file.Path): java.nio.file.Path
        resolve(arg0: java.lang.String | string): java.nio.file.Path
        resolveSibling(arg0: java.nio.file.Path): java.nio.file.Path
        resolveSibling(arg0: java.lang.String | string): java.nio.file.Path
        relativize(arg0: java.nio.file.Path): java.nio.file.Path
        toUri(): java.net.URI
        toAbsolutePath(): java.nio.file.Path
        toRealPath(...vargs: java.nio.file.LinkOption[]): java.nio.file.Path
        toFile(): java.io.File
        register(
          arg0: java.nio.file.WatchService,
          arg1: java.nio.file.WatchEvent$Kind<unknown>[],
          ...vargs: (java.nio.file.WatchEvent$Modifier | java.nio.file.WatchEvent$Modifier$$lambda)[]
        ): java.nio.file.WatchKey
        register(
          arg0: java.nio.file.WatchService,
          ...vargs: java.nio.file.WatchEvent$Kind<unknown>[]
        ): java.nio.file.WatchKey
        iterator(): java.util.Iterator<java.nio.file.Path>
        compareTo(arg0: java.nio.file.Path): number
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
        compareTo(arg0: java.lang.Object | any): number
      }
    }
  }
}
