declare namespace sun {
    namespace nio {
        namespace fs {
class UnixPath extends sun.nio.fs.AbstractPath {
    public getFileSystem(): sun.nio.fs.UnixFileSystem
    public getRoot(): sun.nio.fs.UnixPath
    public getFileName(): sun.nio.fs.UnixPath
    public getParent(): sun.nio.fs.UnixPath
    public getNameCount(): int
    public getName(arg0: int): sun.nio.fs.UnixPath
    public subpath(arg0: int, arg1: int): sun.nio.fs.UnixPath
    public isAbsolute(): boolean
    public resolve(arg0: java.nio.file.Path): sun.nio.fs.UnixPath
    public relativize(arg0: java.nio.file.Path): sun.nio.fs.UnixPath
    public normalize(): java.nio.file.Path
    public startsWith(arg0: java.nio.file.Path): boolean
    public endsWith(arg0: java.nio.file.Path): boolean
    public compareTo(arg0: java.nio.file.Path): int
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public toAbsolutePath(): sun.nio.fs.UnixPath
    public toRealPath(...arg0: java.nio.file.LinkOption[]): java.nio.file.Path
    public toUri(): java.net.URI
    public register(arg0: java.nio.file.WatchService, arg1: java.nio.file.WatchEvent$Kind<any>[], ...arg2: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey
    public toAbsolutePath(): java.nio.file.Path
    public relativize(arg0: java.nio.file.Path): java.nio.file.Path
    public resolve(arg0: java.nio.file.Path): java.nio.file.Path
    public subpath(arg0: int, arg1: int): java.nio.file.Path
    public getName(arg0: int): java.nio.file.Path
    public getParent(): java.nio.file.Path
    public getFileName(): java.nio.file.Path
    public getRoot(): java.nio.file.Path
    public getFileSystem(): java.nio.file.FileSystem
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

        }
    }
}