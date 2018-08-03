declare namespace java {
    namespace io {
        class File implements java.io.Serializable , java.lang.Comparable<java.io.File> {
            public static readonly separatorChar: char
            public static readonly separator: string
            public static readonly pathSeparatorChar: char
            public static readonly pathSeparator: string
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.io.File, arg1: java.lang.String | string)
            public constructor(arg0: java.net.URI)
            public getName(): string
            public getParent(): string
            public getParentFile(): java.io.File
            public getPath(): string
            public isAbsolute(): boolean
            public getAbsolutePath(): string
            public getAbsoluteFile(): java.io.File
            public getCanonicalPath(): string
            public getCanonicalFile(): java.io.File
            public toURL(): java.net.URL
            public toURI(): java.net.URI
            public canRead(): boolean
            public canWrite(): boolean
            public exists(): boolean
            public isDirectory(): boolean
            public isFile(): boolean
            public isHidden(): boolean
            public lastModified(): long
            public length(): long
            public createNewFile(): boolean
            public delete(): boolean
            public deleteOnExit(): void
            public list(): java.lang.String[]
            public list(arg0: java.io.FilenameFilter | java.io.FilenameFilter$$Lambda): java.lang.String[]
            public listFiles(): java.io.File[]
            public listFiles(arg0: java.io.FilenameFilter | java.io.FilenameFilter$$Lambda): java.io.File[]
            public listFiles(arg0: java.io.FileFilter | java.io.FileFilter$$Lambda): java.io.File[]
            public mkdir(): boolean
            public mkdirs(): boolean
            public renameTo(arg0: java.io.File): boolean
            public setLastModified(arg0: long): boolean
            public setReadOnly(): boolean
            public setWritable(arg0: boolean, arg1: boolean): boolean
            public setWritable(arg0: boolean): boolean
            public setReadable(arg0: boolean, arg1: boolean): boolean
            public setReadable(arg0: boolean): boolean
            public setExecutable(arg0: boolean, arg1: boolean): boolean
            public setExecutable(arg0: boolean): boolean
            public canExecute(): boolean
            public static listRoots(): java.io.File[]
            public getTotalSpace(): long
            public getFreeSpace(): long
            public getUsableSpace(): long
            public static createTempFile(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.io.File): java.io.File
            public static createTempFile(arg0: java.lang.String | string, arg1: java.lang.String | string): java.io.File
            public compareTo(arg0: java.io.File): int
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public toPath(): java.nio.file.Path
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}