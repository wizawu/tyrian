declare namespace java {
    namespace io {
        abstract class FileSystem {
            public static readonly BA_EXISTS: int
            public static readonly BA_REGULAR: int
            public static readonly BA_DIRECTORY: int
            public static readonly BA_HIDDEN: int
            public static readonly ACCESS_READ: int
            public static readonly ACCESS_WRITE: int
            public static readonly ACCESS_EXECUTE: int
            public static readonly SPACE_TOTAL: int
            public static readonly SPACE_FREE: int
            public static readonly SPACE_USABLE: int
            public abstract getSeparator(): char
            public abstract getPathSeparator(): char
            public abstract normalize(arg0: java.lang.String | string): string
            public abstract prefixLength(arg0: java.lang.String | string): int
            public abstract resolve(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public abstract getDefaultParent(): string
            public abstract fromURIPath(arg0: java.lang.String | string): string
            public abstract isAbsolute(arg0: java.io.File): boolean
            public abstract resolve(arg0: java.io.File): string
            public abstract canonicalize(arg0: java.lang.String | string): string
            public abstract getBooleanAttributes(arg0: java.io.File): int
            public abstract checkAccess(arg0: java.io.File, arg1: int): boolean
            public abstract setPermission(arg0: java.io.File, arg1: int, arg2: boolean, arg3: boolean): boolean
            public abstract getLastModifiedTime(arg0: java.io.File): long
            public abstract getLength(arg0: java.io.File): long
            public abstract createFileExclusively(arg0: java.lang.String | string): boolean
            public abstract delete(arg0: java.io.File): boolean
            public abstract list(arg0: java.io.File): java.lang.String[]
            public abstract createDirectory(arg0: java.io.File): boolean
            public abstract rename(arg0: java.io.File, arg1: java.io.File): boolean
            public abstract setLastModifiedTime(arg0: java.io.File, arg1: long): boolean
            public abstract setReadOnly(arg0: java.io.File): boolean
            public abstract listRoots(): java.io.File[]
            public abstract getSpace(arg0: java.io.File, arg1: int): long
            public abstract compare(arg0: java.io.File, arg1: java.io.File): int
            public abstract hashCode(arg0: java.io.File): int
            public static class: java.lang.Class<any>
        }
    }
}