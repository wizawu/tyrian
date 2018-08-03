declare namespace java {
    namespace nio {
        namespace file {
            class Files {
                public static newInputStream(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.InputStream
                public static newOutputStream(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                public static newByteChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                public static newByteChannel(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.nio.channels.SeekableByteChannel
                public static newDirectoryStream(arg0: java.nio.file.Path): java.nio.file.DirectoryStream<java.nio.file.Path>
                public static newDirectoryStream(arg0: java.nio.file.Path, arg1: java.lang.String | string): java.nio.file.DirectoryStream<java.nio.file.Path>
                public static newDirectoryStream(arg0: java.nio.file.Path, arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path> | java.nio.file.DirectoryStream$Filter$$Lambda<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                public static createFile(arg0: java.nio.file.Path, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createDirectory(arg0: java.nio.file.Path, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createDirectories(arg0: java.nio.file.Path, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createTempFile(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.String | string, ...arg3: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createTempFile(arg0: java.lang.String | string, arg1: java.lang.String | string, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createTempDirectory(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createTempDirectory(arg0: java.lang.String | string, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createSymbolicLink(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path
                public static createLink(arg0: java.nio.file.Path, arg1: java.nio.file.Path): java.nio.file.Path
                public static delete(arg0: java.nio.file.Path): void
                public static deleteIfExists(arg0: java.nio.file.Path): boolean
                public static copy(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): java.nio.file.Path
                public static move(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): java.nio.file.Path
                public static readSymbolicLink(arg0: java.nio.file.Path): java.nio.file.Path
                public static getFileStore(arg0: java.nio.file.Path): java.nio.file.FileStore
                public static isSameFile(arg0: java.nio.file.Path, arg1: java.nio.file.Path): boolean
                public static isHidden(arg0: java.nio.file.Path): boolean
                public static probeContentType(arg0: java.nio.file.Path): string
                public static getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.Class<V>, ...arg2: java.nio.file.LinkOption[]): V
                public static readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...arg2: java.nio.file.LinkOption[]): A
                public static setAttribute(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): java.nio.file.Path
                public static getAttribute(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.lang.Object
                public static readAttributes(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                public static getPosixFilePermissions(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.util.Set<java.nio.file.attribute.PosixFilePermission>
                public static setPosixFilePermissions(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.attribute.PosixFilePermission>): java.nio.file.Path
                public static getOwner(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.nio.file.attribute.UserPrincipal
                public static setOwner(arg0: java.nio.file.Path, arg1: java.nio.file.attribute.UserPrincipal): java.nio.file.Path
                public static isSymbolicLink(arg0: java.nio.file.Path): boolean
                public static isDirectory(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static isRegularFile(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static getLastModifiedTime(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.nio.file.attribute.FileTime
                public static setLastModifiedTime(arg0: java.nio.file.Path, arg1: java.nio.file.attribute.FileTime): java.nio.file.Path
                public static size(arg0: java.nio.file.Path): long
                public static exists(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static notExists(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static isReadable(arg0: java.nio.file.Path): boolean
                public static isWritable(arg0: java.nio.file.Path): boolean
                public static isExecutable(arg0: java.nio.file.Path): boolean
                public static walkFileTree(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.FileVisitOption>, arg2: int, arg3: java.nio.file.FileVisitor<java.nio.file.Path>): java.nio.file.Path
                public static walkFileTree(arg0: java.nio.file.Path, arg1: java.nio.file.FileVisitor<java.nio.file.Path>): java.nio.file.Path
                public static newBufferedReader(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset): java.io.BufferedReader
                public static newBufferedReader(arg0: java.nio.file.Path): java.io.BufferedReader
                public static newBufferedWriter(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset, ...arg2: java.nio.file.OpenOption[]): java.io.BufferedWriter
                public static newBufferedWriter(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.BufferedWriter
                public static copy(arg0: java.io.InputStream, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): long
                public static copy(arg0: java.nio.file.Path, arg1: java.io.OutputStream): long
                public static readAllBytes(arg0: java.nio.file.Path): byte[]
                public static readAllLines(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset): java.util.List<java.lang.String>
                public static readAllLines(arg0: java.nio.file.Path): java.util.List<java.lang.String>
                public static write(arg0: java.nio.file.Path, arg1: byte[], ...arg2: java.nio.file.OpenOption[]): java.nio.file.Path
                public static write(arg0: java.nio.file.Path, arg1: java.lang.Iterable<java.lang.CharSequence>, arg2: java.nio.charset.Charset, ...arg3: java.nio.file.OpenOption[]): java.nio.file.Path
                public static write(arg0: java.nio.file.Path, arg1: java.lang.Iterable<java.lang.CharSequence>, ...arg2: java.nio.file.OpenOption[]): java.nio.file.Path
                public static list(arg0: java.nio.file.Path): java.util.stream.Stream<java.nio.file.Path>
                public static walk(arg0: java.nio.file.Path, arg1: int, ...arg2: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>
                public static walk(arg0: java.nio.file.Path, ...arg1: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>
                public static find(arg0: java.nio.file.Path, arg1: int, arg2: java.util.function$.BiPredicate<java.nio.file.Path, java.nio.file.attribute.BasicFileAttributes>, ...arg3: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>
                public static lines(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset): java.util.stream.Stream<java.lang.String>
                public static lines(arg0: java.nio.file.Path): java.util.stream.Stream<java.lang.String>
                public static class: java.lang.Class<any>
            }
        }
    }
}