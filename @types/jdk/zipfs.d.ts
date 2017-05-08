declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipFileAttributeView implements java.nio.file.attribute.BasicFileAttributeView {
                    static get<V extends java.nio.file.attribute.FileAttributeView>(arg0: com.sun.nio.zipfs.ZipPath, arg1: java.lang.Class<V>): V
                    static get(arg0: com.sun.nio.zipfs.ZipPath, arg1: string): com.sun.nio.zipfs.ZipFileAttributeView
                    public name(): string
                    public readAttributes(): com.sun.nio.zipfs.ZipFileAttributes
                    public setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                    setAttribute(arg0: string, arg1: java.lang.Object): void
                    readAttributes(arg0: string): java.util.Map<java.lang.String, java.lang.Object>
                    attribute(arg0: any, arg1: com.sun.nio.zipfs.ZipFileAttributes): java.lang.Object
                    public readAttributes(): java.nio.file.attribute.BasicFileAttributes
                }
                class ZipFileStore extends java.nio.file.FileStore {
                    constructor(arg0: com.sun.nio.zipfs.ZipPath)
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
                }
                class JarFileSystemProvider extends com.sun.nio.zipfs.ZipFileSystemProvider {
                    public constructor()
                    public getScheme(): string
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                }
                class ZipInfo {
                    public constructor()
                    public static main(arg0: java.lang.String[]): void
                    static print(arg0: string, ...arg1: java.lang.Object[]): void
                    static printLOC(arg0: byte[]): void
                    static printCEN(arg0: byte[], arg1: int): void
                    static locoff(arg0: byte[], arg1: int): long
                    static printExtra(arg0: byte[], arg1: int, arg2: int): void
                }
                class ZipFileAttributes implements java.nio.file.attribute.BasicFileAttributes {
                    constructor(arg0: any)
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
                }
                class ZipCoder {
                    toString(arg0: byte[], arg1: int): string
                    toString(arg0: byte[]): string
                    getBytes(arg0: string): byte[]
                    getBytesUTF8(arg0: string): byte[]
                    toStringUTF8(arg0: byte[], arg1: int): string
                    isUTF8(): boolean
                    static get(arg0: java.nio.charset.Charset): com.sun.nio.zipfs.ZipCoder
                    static get(arg0: string): com.sun.nio.zipfs.ZipCoder
                }
                class ZipFileSystemProvider extends java.nio.file.spi.FileSystemProvider {
                    public constructor()
                    public getScheme(): string
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    public newFileSystem(arg0: java.net.URI, arg1: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    public newFileSystem(arg0: java.nio.file.Path, arg1: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                    public getFileSystem(arg0: java.net.URI): java.nio.file.FileSystem
                    static toZipPath(arg0: java.nio.file.Path): com.sun.nio.zipfs.ZipPath
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
                    public newDirectoryStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: any): java.nio.file.DirectoryStream<java.nio.file.Path>
                    public newFileChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    public newInputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.InputStream
                    public newOutputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...arg2: java.nio.file.LinkOption[]): A
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    public readSymbolicLink<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.nio.file.Path
                    public setAttribute<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): void
                    removeFileSystem<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: com.sun.nio.zipfs.ZipFileSystem): void
                }
                class ZipPath implements java.nio.file.Path {
                    constructor(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: byte[])
                    constructor(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: byte[], arg2: boolean)
                    public getRoot(): com.sun.nio.zipfs.ZipPath
                    public getFileName(): java.nio.file.Path
                    public getParent(): com.sun.nio.zipfs.ZipPath
                    public getNameCount(): int
                    public getName(arg0: int): com.sun.nio.zipfs.ZipPath
                    public subpath(arg0: int, arg1: int): com.sun.nio.zipfs.ZipPath
                    public toRealPath(...arg0: java.nio.file.LinkOption[]): com.sun.nio.zipfs.ZipPath
                    isHidden(): boolean
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
                    getResolvedPath(): byte[]
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public compareTo(arg0: java.nio.file.Path): int
                    public register(arg0: java.nio.file.WatchService, arg1: any, ...arg2: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey
                    public register(arg0: java.nio.file.WatchService, ...arg1: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey
                    public toFile(): java.io.File
                    public iterator(): java.util.Iterator<java.nio.file.Path>
                    createDirectory(...arg0: java.nio.file.attribute.FileAttribute<any>[]): void
                    newInputStream(...arg0: java.nio.file.OpenOption[]): java.io.InputStream
                    newDirectoryStream(arg0: any): java.nio.file.DirectoryStream<java.nio.file.Path>
                    delete(): void
                    deleteIfExists(): void
                    getAttributes(): com.sun.nio.zipfs.ZipFileAttributes
                    setAttribute(arg0: string, arg1: java.lang.Object, ...arg2: java.nio.file.LinkOption[]): void
                    setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                    readAttributes(arg0: string, ...arg1: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    getFileStore(): java.nio.file.FileStore
                    isSameFile(arg0: java.nio.file.Path): boolean
                    newByteChannel(arg0: java.util.Set<java.nio.file.OpenOption>, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                    newFileChannel(arg0: java.util.Set<java.nio.file.OpenOption>, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    checkAccess(...arg0: java.nio.file.AccessMode[]): void
                    exists(): boolean
                    newOutputStream(...arg0: java.nio.file.OpenOption[]): java.io.OutputStream
                    move(arg0: com.sun.nio.zipfs.ZipPath, ...arg1: java.nio.file.CopyOption[]): void
                    copy(arg0: com.sun.nio.zipfs.ZipPath, ...arg1: java.nio.file.CopyOption[]): void
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
                }
                class ZipFileSystem extends java.nio.file.FileSystem {
                    cen: byte[]
                    constructor(arg0: com.sun.nio.zipfs.ZipFileSystemProvider, arg1: java.nio.file.Path, arg2: java.util.Map<java.lang.String, any>)
                    public provider(): java.nio.file.spi.FileSystemProvider
                    public getSeparator(): string
                    public isOpen(): boolean
                    public isReadOnly(): boolean
                    public getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
                    getDefaultDir(): com.sun.nio.zipfs.ZipPath
                    public getPath(arg0: string, ...arg1: java.lang.String[]): com.sun.nio.zipfs.ZipPath
                    public getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
                    public newWatchService(): java.nio.file.WatchService
                    getFileStore(arg0: com.sun.nio.zipfs.ZipPath): java.nio.file.FileStore
                    public getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
                    public supportedFileAttributeViews(): java.util.Set<java.lang.String>
                    public toString(): string
                    getZipFile(): java.nio.file.Path
                    public getPathMatcher(arg0: string): java.nio.file.PathMatcher
                    public close(): void
                    getFileAttributes(arg0: byte[]): com.sun.nio.zipfs.ZipFileAttributes
                    setTimes(arg0: byte[], arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime, arg3: java.nio.file.attribute.FileTime): void
                    exists(arg0: byte[]): boolean
                    isDirectory(arg0: byte[]): boolean
                    iteratorOf(arg0: byte[], arg1: any): java.util.Iterator<java.nio.file.Path>
                    createDirectory(arg0: byte[], ...arg1: java.nio.file.attribute.FileAttribute<any>[]): void
                    copyFile(arg0: boolean, arg1: byte[], arg2: byte[], ...arg3: java.nio.file.CopyOption[]): void
                    newOutputStream(arg0: byte[], ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    newInputStream(arg0: byte[]): java.io.InputStream
                    newByteChannel(arg0: byte[], arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                    newFileChannel(arg0: byte[], arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    getBytes(arg0: string): byte[]
                    getString(arg0: byte[]): string
                    protected finalize(): void
                    readFullyAt(arg0: byte[], arg1: int, arg2: long, arg3: long): long
                    public deleteFile(arg0: byte[], arg1: boolean): void
                    static zerror(arg0: string): void
                    public getPath(arg0: string, arg1: java.lang.String[]): java.nio.file.Path
                    static access$000(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: any): void
                    static access$100(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: java.nio.file.Path): void
                    static access$200(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: java.util.zip.Inflater): void
                    static access$300(arg0: com.sun.nio.zipfs.ZipFileSystem): java.util.Set
                    static access$400(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: any): long
                    static access$500(arg0: com.sun.nio.zipfs.ZipFileSystem): void
                    static access$600(arg0: com.sun.nio.zipfs.ZipFileSystem): java.util.zip.Deflater
                    static access$700(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: java.util.zip.Deflater): void
                    static access$800(): boolean
                    static access$900(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: byte[]): any
                }
                class ZipUtils {
                    constructor()
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
                }
                class ZipConstants {
                    static METHOD_STORED: int
                    static METHOD_DEFLATED: int
                    static METHOD_DEFLATED64: int
                    static METHOD_BZIP2: int
                    static METHOD_LZMA: int
                    static METHOD_LZ77: int
                    static METHOD_AES: int
                    static FLAG_ENCRYPTED: int
                    static FLAG_DATADESCR: int
                    static FLAG_EFS: int
                    static LOCSIG: long
                    static EXTSIG: long
                    static CENSIG: long
                    static ENDSIG: long
                    static LOCHDR: int
                    static EXTHDR: int
                    static CENHDR: int
                    static ENDHDR: int
                    static LOCVER: int
                    static LOCFLG: int
                    static LOCHOW: int
                    static LOCTIM: int
                    static LOCCRC: int
                    static LOCSIZ: int
                    static LOCLEN: int
                    static LOCNAM: int
                    static LOCEXT: int
                    static EXTCRC: int
                    static EXTSIZ: int
                    static EXTLEN: int
                    static CENVEM: int
                    static CENVER: int
                    static CENFLG: int
                    static CENHOW: int
                    static CENTIM: int
                    static CENCRC: int
                    static CENSIZ: int
                    static CENLEN: int
                    static CENNAM: int
                    static CENEXT: int
                    static CENCOM: int
                    static CENDSK: int
                    static CENATT: int
                    static CENATX: int
                    static CENOFF: int
                    static ENDSUB: int
                    static ENDTOT: int
                    static ENDSIZ: int
                    static ENDOFF: int
                    static ENDCOM: int
                    static ZIP64_ENDSIG: long
                    static ZIP64_LOCSIG: long
                    static ZIP64_ENDHDR: int
                    static ZIP64_LOCHDR: int
                    static ZIP64_EXTHDR: int
                    static ZIP64_EXTID: int
                    static ZIP64_MINVAL32: int
                    static ZIP64_MINVAL: long
                    static ZIP64_ENDLEN: int
                    static ZIP64_ENDVEM: int
                    static ZIP64_ENDVER: int
                    static ZIP64_ENDNMD: int
                    static ZIP64_ENDDSK: int
                    static ZIP64_ENDTOD: int
                    static ZIP64_ENDTOT: int
                    static ZIP64_ENDSIZ: int
                    static ZIP64_ENDOFF: int
                    static ZIP64_ENDEXT: int
                    static ZIP64_LOCDSK: int
                    static ZIP64_LOCOFF: int
                    static ZIP64_LOCTOT: int
                    static ZIP64_EXTCRC: int
                    static ZIP64_EXTSIZ: int
                    static ZIP64_EXTLEN: int
                    static EXTID_ZIP64: int
                    static EXTID_NTFS: int
                    static EXTID_UNIX: int
                    static EXTID_EFS: int
                    static EXTID_EXTT: int
                    static END_MAXLEN: long
                    static READBLOCKSZ: int
                    constructor()
                    static CH(arg0: byte[], arg1: int): int
                    static SH(arg0: byte[], arg1: int): int
                    static LG(arg0: byte[], arg1: int): long
                    static LL(arg0: byte[], arg1: int): long
                    static GETSIG(arg0: byte[]): long
                    static LOCSIG(arg0: byte[]): long
                    static LOCVER(arg0: byte[]): int
                    static LOCFLG(arg0: byte[]): int
                    static LOCHOW(arg0: byte[]): int
                    static LOCTIM(arg0: byte[]): long
                    static LOCCRC(arg0: byte[]): long
                    static LOCSIZ(arg0: byte[]): long
                    static LOCLEN(arg0: byte[]): long
                    static LOCNAM(arg0: byte[]): int
                    static LOCEXT(arg0: byte[]): int
                    static EXTCRC(arg0: byte[]): long
                    static EXTSIZ(arg0: byte[]): long
                    static EXTLEN(arg0: byte[]): long
                    static ENDSUB(arg0: byte[]): int
                    static ENDTOT(arg0: byte[]): int
                    static ENDSIZ(arg0: byte[]): long
                    static ENDOFF(arg0: byte[]): long
                    static ENDCOM(arg0: byte[]): int
                    static ENDCOM(arg0: byte[], arg1: int): int
                    static ZIP64_ENDTOD(arg0: byte[]): long
                    static ZIP64_ENDTOT(arg0: byte[]): long
                    static ZIP64_ENDSIZ(arg0: byte[]): long
                    static ZIP64_ENDOFF(arg0: byte[]): long
                    static ZIP64_LOCOFF(arg0: byte[]): long
                    static CENSIG(arg0: byte[], arg1: int): long
                    static CENVEM(arg0: byte[], arg1: int): int
                    static CENVER(arg0: byte[], arg1: int): int
                    static CENFLG(arg0: byte[], arg1: int): int
                    static CENHOW(arg0: byte[], arg1: int): int
                    static CENTIM(arg0: byte[], arg1: int): long
                    static CENCRC(arg0: byte[], arg1: int): long
                    static CENSIZ(arg0: byte[], arg1: int): long
                    static CENLEN(arg0: byte[], arg1: int): long
                    static CENNAM(arg0: byte[], arg1: int): int
                    static CENEXT(arg0: byte[], arg1: int): int
                    static CENCOM(arg0: byte[], arg1: int): int
                    static CENDSK(arg0: byte[], arg1: int): int
                    static CENATT(arg0: byte[], arg1: int): int
                    static CENATX(arg0: byte[], arg1: int): long
                    static CENOFF(arg0: byte[], arg1: int): long
                }
                class ZipDirectoryStream implements java.nio.file.DirectoryStream<java.nio.file.Path> {
                    constructor(arg0: com.sun.nio.zipfs.ZipPath, arg1: any)
                    public iterator(): java.util.Iterator<java.nio.file.Path>
                    public close(): void
                    static access$000(arg0: com.sun.nio.zipfs.ZipDirectoryStream): boolean
                    static access$100(arg0: com.sun.nio.zipfs.ZipDirectoryStream): java.util.Iterator
                }
            }
        }
    }
}
