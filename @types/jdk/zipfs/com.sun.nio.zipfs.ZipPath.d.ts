declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipPath implements java.nio.file.Path {
                    public getRoot(): com.sun.nio.zipfs.ZipPath
                    public getFileName(): java.nio.file.Path
                    public getParent(): com.sun.nio.zipfs.ZipPath
                    public getNameCount(): int
                    public getName(arg0: int): com.sun.nio.zipfs.ZipPath
                    public subpath(arg0: int, arg1: int): com.sun.nio.zipfs.ZipPath
                    public toRealPath(...arg0: java.nio.file.LinkOption[]): com.sun.nio.zipfs.ZipPath
                    public toAbsolutePath(): com.sun.nio.zipfs.ZipPath
                    public toUri(): java.net.URI
                    public relativize(arg0: java.nio.file.Path): java.nio.file.Path
                    public getFileSystem(): com.sun.nio.zipfs.ZipFileSystem
                    public isAbsolute(): boolean
                    public resolve(arg0: java.nio.file.Path): com.sun.nio.zipfs.ZipPath
                    public resolveSibling(arg0: java.nio.file.Path): java.nio.file.Path
                    public startsWith(arg0: java.nio.file.Path): boolean
                    public endsWith(arg0: java.nio.file.Path): boolean
                    public resolve(arg0: java.lang.String | string): com.sun.nio.zipfs.ZipPath
                    public resolveSibling(arg0: java.lang.String | string): java.nio.file.Path
                    public startsWith(arg0: java.lang.String | string): boolean
                    public endsWith(arg0: java.lang.String | string): boolean
                    public normalize(): java.nio.file.Path
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public compareTo(arg0: java.nio.file.Path): int
                    public register(arg0: java.nio.file.WatchService, arg1: java.nio.file.WatchEvent$Kind<any>[], ...arg2: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey
                    public register(arg0: java.nio.file.WatchService, ...arg1: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey
                    public toFile(): java.io.File
                    public iterator(): java.util.Iterator<java.nio.file.Path>
                    public toRealPath(arg0: java.nio.file.LinkOption[]): java.nio.file.Path
                    public toAbsolutePath(): java.nio.file.Path
                    public resolve(arg0: java.lang.String | string): java.nio.file.Path
                    public resolve(arg0: java.nio.file.Path): java.nio.file.Path
                    public subpath(arg0: int, arg1: int): java.nio.file.Path
                    public getName(arg0: int): java.nio.file.Path
                    public getParent(): java.nio.file.Path
                    public getRoot(): java.nio.file.Path
                    public getFileSystem(): java.nio.file.FileSystem
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}