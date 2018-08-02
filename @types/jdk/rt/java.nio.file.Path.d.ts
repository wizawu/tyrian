declare namespace java {
    namespace nio {
        namespace file {
            interface Path extends java.lang.Comparable<java.nio.file.Path> , java.lang.Iterable<java.nio.file.Path> , java.nio.file.Watchable {
                getFileSystem(): java.nio.file.FileSystem
                isAbsolute(): boolean
                getRoot(): java.nio.file.Path
                getFileName(): java.nio.file.Path
                getParent(): java.nio.file.Path
                getNameCount(): int
                getName(arg0: int): java.nio.file.Path
                subpath(arg0: int, arg1: int): java.nio.file.Path
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
                toRealPath(...arg0: java.nio.file.LinkOption[]): java.nio.file.Path
                toFile(): java.io.File
                register(arg0: java.nio.file.WatchService, arg1: java.nio.file.WatchEvent$Kind<any>[], ...arg2: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey
                register(arg0: java.nio.file.WatchService, ...arg1: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey
                iterator(): java.util.Iterator<java.nio.file.Path>
                compareTo(arg0: java.nio.file.Path): int
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
                compareTo(arg0: java.lang.Object): int
            }
        }
    }
}