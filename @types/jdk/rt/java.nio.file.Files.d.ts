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
                public static setAttribute<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): java.nio.file.Path
                public static getAttribute<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.lang.Object
                public static readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                public static getPosixFilePermissions<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.util.Set<java.nio.file.attribute.PosixFilePermission>
                public static setPosixFilePermissions<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.attribute.PosixFilePermission>): java.nio.file.Path
                public static getOwner<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.nio.file.attribute.UserPrincipal
                public static setOwner<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.file.attribute.UserPrincipal): java.nio.file.Path
                public static isSymbolicLink<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): boolean
                public static isDirectory<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static isRegularFile<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static getLastModifiedTime<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.nio.file.attribute.FileTime
                public static setLastModifiedTime<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.file.attribute.FileTime): java.nio.file.Path
                public static size<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): long
                public static exists<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static notExists<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): boolean
                public static isReadable<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): boolean
                public static isWritable<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): boolean
                public static isExecutable<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): boolean
                public static walkFileTree<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.FileVisitOption>, arg2: int, arg3: java.nio.file.FileVisitor<java.nio.file.Path>): java.nio.file.Path
                public static walkFileTree<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.file.FileVisitor<java.nio.file.Path>): java.nio.file.Path
                public static newBufferedReader<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset): java.io.BufferedReader
                public static newBufferedReader<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.io.BufferedReader
                public static newBufferedWriter<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset, ...arg2: java.nio.file.OpenOption[]): java.io.BufferedWriter
                public static newBufferedWriter<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.BufferedWriter
                public static copy<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): long
                public static copy<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): long
                public static readAllBytes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): byte[]
                public static readAllLines<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset): java.util.List<java.lang.String>
                public static readAllLines<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.util.List<java.lang.String>
                public static write<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: byte[], ...arg2: java.nio.file.OpenOption[]): java.nio.file.Path
                public static write<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Iterable<java.lang.CharSequence>, arg2: java.nio.charset.Charset, ...arg3: java.nio.file.OpenOption[]): java.nio.file.Path
                public static write<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Iterable<java.lang.CharSequence>, ...arg2: java.nio.file.OpenOption[]): java.nio.file.Path
                public static list<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.util.stream.Stream<java.nio.file.Path>
                public static walk<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: int, ...arg2: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>
                public static walk<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, ...arg1: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>
                public static find<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: int, arg2: java.util.function$.BiPredicate<java.nio.file.Path, java.nio.file.attribute.BasicFileAttributes>, ...arg3: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>
                public static lines<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset): java.util.stream.Stream<java.lang.String>
                public static lines<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.util.stream.Stream<java.lang.String>
                public static class: java.lang.Class<any>
            }
        }
    }
}