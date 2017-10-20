declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipInfo {
                    public constructor()
                    public static main(arg0: java.lang.String[]): void
                    public static class: java.lang.Class<any>
                }
                class ZipFileStore extends java.nio.file.FileStore {
                    public name(): string
                    public type(): string
                    public isReadOnly(): boolean
                    public supportsFileAttributeView(arg0: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean
                    public supportsFileAttributeView(arg0: string): boolean
                    public getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
                    public getTotalSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getUsableSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getUnallocatedSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getAttribute<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ZipFileStore$ZipFileStoreAttributes {
                    public constructor(arg0: com.sun.nio.zipfs.ZipFileStore)
                    public totalSpace(): long
                    public usableSpace(): long
                    public unallocatedSpace(): long
                    public static class: java.lang.Class<any>
                }
                class ZipFileAttributeView implements java.nio.file.attribute.BasicFileAttributeView {
                    public name(): string
                    public readAttributes(): com.sun.nio.zipfs.ZipFileAttributes
                    public setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                    public readAttributes(): java.nio.file.attribute.BasicFileAttributes
                    public static class: java.lang.Class<any>
                }
                class ZipFileAttributeView$1 {
                    public static class: java.lang.Class<any>
                }
                class ZipFileAttributeView$AttrID extends java.lang.Enum<com.sun.nio.zipfs.ZipFileAttributeView$AttrID> {
                    public static size: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static creationTime: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static lastAccessTime: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static lastModifiedTime: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static isDirectory: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static isRegularFile: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static isSymbolicLink: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static isOther: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static fileKey: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static compressedSize: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static crc: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static method: com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static values(): com.sun.nio.zipfs.ZipFileAttributeView$AttrID[]
                    public static valueOf(arg0: string): com.sun.nio.zipfs.ZipFileAttributeView$AttrID
                    public static class: java.lang.Class<any>
                }
                class JarFileSystemProvider extends com.sun.nio.zipfs.ZipFileSystemProvider {
                    public constructor()
                    public getScheme(): string
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                    public static class: java.lang.Class<any>
                }
                class ZipFileAttributes implements java.nio.file.attribute.BasicFileAttributes {
                    public creationTime(): java.nio.file.attribute.FileTime
                    public isDirectory(): boolean
                    public isOther(): boolean
                    public isRegularFile(): boolean
                    public lastAccessTime(): java.nio.file.attribute.FileTime
                    public lastModifiedTime(): java.nio.file.attribute.FileTime
                    public size(): long
                    public isSymbolicLink(): boolean
                    public fileKey(): java.lang.Object
                    public compressedSize(): long
                    public crc(): long
                    public method(): int
                    public extra(): byte[]
                    public comment(): byte[]
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class ZipCoder {
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystemProvider extends java.nio.file.spi.FileSystemProvider {
                    public constructor()
                    public getScheme(): string
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    public newFileSystem(arg0: java.net.URI, arg1: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    public newFileSystem(arg0: java.nio.file.Path, arg1: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                    public getFileSystem(arg0: java.net.URI): java.nio.file.FileSystem
                    public checkAccess(arg0: java.nio.file.Path, ...arg1: java.nio.file.AccessMode[]): void
                    public copy(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): void
                    public createDirectory(arg0: java.nio.file.Path, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): void
                    public delete(arg0: java.nio.file.Path): void
                    public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.Class<V>, ...arg2: java.nio.file.LinkOption[]): V
                    public getFileStore<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path): java.nio.file.FileStore
                    public isHidden<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path): boolean
                    public isSameFile<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.nio.file.Path): boolean
                    public move<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): void
                    public newAsynchronousFileChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, arg2: java.util.concurrent.ExecutorService, ...arg3: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.AsynchronousFileChannel
                    public newByteChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                    public newDirectoryStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path> | java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                    public newFileChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    public newInputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.InputStream
                    public newOutputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...arg2: java.nio.file.LinkOption[]): A
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    public readSymbolicLink<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.nio.file.Path
                    public setAttribute<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): void
                    public static class: java.lang.Class<any>
                }
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
                    public resolve(arg0: string): com.sun.nio.zipfs.ZipPath
                    public resolveSibling(arg0: string): java.nio.file.Path
                    public startsWith(arg0: string): boolean
                    public endsWith(arg0: string): boolean
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
                    public resolve(arg0: string): java.nio.file.Path
                    public resolve(arg0: java.nio.file.Path): java.nio.file.Path
                    public subpath(arg0: int, arg1: int): java.nio.file.Path
                    public getName(arg0: int): java.nio.file.Path
                    public getParent(): java.nio.file.Path
                    public getRoot(): java.nio.file.Path
                    public getFileSystem(): java.nio.file.FileSystem
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class ZipPath$2 {
                    public static class: java.lang.Class<any>
                }
                class ZipPath$1 implements java.util.Iterator<java.nio.file.Path> {
                    public hasNext(): boolean
                    public next(): java.nio.file.Path
                    public remove(): void
                    public next(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem extends java.nio.file.FileSystem {
                    public provider(): java.nio.file.spi.FileSystemProvider
                    public getSeparator(): string
                    public isOpen(): boolean
                    public isReadOnly(): boolean
                    public getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
                    public getPath(arg0: string, ...arg1: java.lang.String[]): com.sun.nio.zipfs.ZipPath
                    public getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
                    public newWatchService(): java.nio.file.WatchService
                    public getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
                    public supportedFileAttributeViews(): java.util.Set<java.lang.String>
                    public toString(): string
                    public getPathMatcher(arg0: string): java.nio.file.PathMatcher
                    public close(): void
                    protected finalize(): void
                    public deleteFile(arg0: byte[], arg1: boolean): void
                    public getPath(arg0: string, arg1: java.lang.String[]): java.nio.file.Path
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$ExChannelCloser {
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$Entry extends com.sun.nio.zipfs.ZipFileSystem$IndexNode {
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$IndexNode {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$END {
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$EntryOutputStream extends java.util.zip.DeflaterOutputStream {
                    public write(arg0: byte[], arg1: int, arg2: int): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$EntryInputStream extends java.io.InputStream {
                    protected rem: long
                    protected size: long
                    public read(arg0: byte[], arg1: int, arg2: int): int
                    public read(): int
                    public skip(arg0: long): long
                    public available(): int
                    public size(): long
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$5 extends java.util.zip.InflaterInputStream {
                    public close(): void
                    protected fill(): void
                    public available(): int
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$4 extends java.nio.channels.FileChannel {
                    public write(arg0: java.nio.ByteBuffer): int
                    public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                    public position(): long
                    public position(arg0: long): java.nio.channels.FileChannel
                    public size(): long
                    public truncate(arg0: long): java.nio.channels.FileChannel
                    public force(arg0: boolean): void
                    public transferTo(arg0: long, arg1: long, arg2: java.nio.channels.WritableByteChannel): long
                    public transferFrom(arg0: java.nio.channels.ReadableByteChannel, arg1: long, arg2: long): long
                    public read(arg0: java.nio.ByteBuffer): int
                    public read(arg0: java.nio.ByteBuffer, arg1: long): int
                    public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                    public write(arg0: java.nio.ByteBuffer, arg1: long): int
                    public map(arg0: java.nio.channels.FileChannel$MapMode, arg1: long, arg2: long): java.nio.MappedByteBuffer
                    public lock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                    public tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                    protected implCloseChannel(): void
                    public truncate(arg0: long): java.nio.channels.SeekableByteChannel
                    public position(arg0: long): java.nio.channels.SeekableByteChannel
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$3 implements java.nio.channels.SeekableByteChannel {
                    public isOpen(): boolean
                    public position(): long
                    public position(arg0: long): java.nio.channels.SeekableByteChannel
                    public read(arg0: java.nio.ByteBuffer): int
                    public truncate(arg0: long): java.nio.channels.SeekableByteChannel
                    public write(arg0: java.nio.ByteBuffer): int
                    public size(): long
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$2 implements java.nio.channels.SeekableByteChannel {
                    public isOpen(): boolean
                    public position(): long
                    public position(arg0: long): java.nio.channels.SeekableByteChannel
                    public read(arg0: java.nio.ByteBuffer): int
                    public truncate(arg0: long): java.nio.channels.SeekableByteChannel
                    public write(arg0: java.nio.ByteBuffer): int
                    public size(): long
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class ZipFileSystem$1 implements java.nio.file.PathMatcher {
                    public matches(arg0: java.nio.file.Path): boolean
                    public static class: java.lang.Class<any>
                }
                class ZipUtils {
                    public static writeShort(arg0: java.io.OutputStream, arg1: int): void
                    public static writeInt(arg0: java.io.OutputStream, arg1: long): void
                    public static writeLong(arg0: java.io.OutputStream, arg1: long): void
                    public static writeBytes(arg0: java.io.OutputStream, arg1: byte[]): void
                    public static writeBytes(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int): void
                    public static toDirectoryPath(arg0: byte[]): byte[]
                    public static dosToJavaTime(arg0: long): long
                    public static javaToDosTime(arg0: long): long
                    public static winToJavaTime(arg0: long): long
                    public static javaToWinTime(arg0: long): long
                    public static unixToJavaTime(arg0: long): long
                    public static javaToUnixTime(arg0: long): long
                    public static toRegexPattern(arg0: string): string
                    public static class: java.lang.Class<any>
                }
                class ZipConstants {
                    public static class: java.lang.Class<any>
                }
                class ZipDirectoryStream implements java.nio.file.DirectoryStream<java.nio.file.Path> {
                    public iterator(): java.util.Iterator<java.nio.file.Path>
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class ZipDirectoryStream$1 implements java.util.Iterator<java.nio.file.Path> {
                    public hasNext(): boolean
                    public next(): java.nio.file.Path
                    public remove(): void
                    public next(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
