declare namespace java {
    namespace io {
class UnixFileSystem extends java.io.FileSystem {
    public constructor()
    public getSeparator(): char
    public getPathSeparator(): char
    public normalize(arg0: java.lang.String | string): string
    public prefixLength(arg0: java.lang.String | string): int
    public resolve(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getDefaultParent(): string
    public fromURIPath(arg0: java.lang.String | string): string
    public isAbsolute(arg0: java.io.File): boolean
    public resolve(arg0: java.io.File): string
    public canonicalize(arg0: java.lang.String | string): string
    public getBooleanAttributes0(arg0: java.io.File): int
    public getBooleanAttributes(arg0: java.io.File): int
    public checkAccess(arg0: java.io.File, arg1: int): boolean
    public getLastModifiedTime(arg0: java.io.File): long
    public getLength(arg0: java.io.File): long
    public setPermission(arg0: java.io.File, arg1: int, arg2: boolean, arg3: boolean): boolean
    public createFileExclusively(arg0: java.lang.String | string): boolean
    public delete(arg0: java.io.File): boolean
    public list(arg0: java.io.File): java.lang.String[]
    public createDirectory(arg0: java.io.File): boolean
    public rename(arg0: java.io.File, arg1: java.io.File): boolean
    public setLastModifiedTime(arg0: java.io.File, arg1: long): boolean
    public setReadOnly(arg0: java.io.File): boolean
    public listRoots(): java.io.File[]
    public getSpace(arg0: java.io.File, arg1: int): long
    public compare(arg0: java.io.File, arg1: java.io.File): int
    public hashCode(arg0: java.io.File): int
    public static class: java.lang.Class<any>
}

    }
}