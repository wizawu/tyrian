declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class JarFileSystemProvider extends com.sun.nio.zipfs.ZipFileSystemProvider {
                    public constructor()
                    public getScheme(): java.lang.String
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                }
                class ZipDirectoryStream implements java.nio.file.DirectoryStream<java.nio.file.Path> {
                    constructor(arg0: com.sun.nio.zipfs.ZipPath, arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>)
                    public iterator(): java.util.Iterator<java.nio.file.Path>
                    public close(): void
                    static access$000(arg0: com.sun.nio.zipfs.ZipDirectoryStream): boolean
                    static access$100(arg0: com.sun.nio.zipfs.ZipDirectoryStream): java.util.Iterator
                }
                class ZipFileAttributeView implements java.nio.file.attribute.BasicFileAttributeView {
                    static get<T>(...args: any[]): any
                    public name(): java.lang.String
                    readAttributes<T>(...args: any[]): any
                    public setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                    setAttribute(arg0: java.lang.String, arg1: java.lang.Object): void
                    attribute(arg0: com.sun.nio.zipfs.ZipFileAttributeView$AttrID, arg1: com.sun.nio.zipfs.ZipFileAttributes): java.lang.Object
                }
                class ZipFileStore extends java.nio.file.FileStore {
                    constructor(arg0: com.sun.nio.zipfs.ZipPath)
                    public name(): java.lang.String
                    public type(): java.lang.String
                    public isReadOnly(): boolean
                    supportsFileAttributeView<T>(...args: any[]): any
                    public getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
                    public getTotalSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getUsableSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getUnallocatedSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getAttribute<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.String): java.lang.Object
                }
                class ZipInfo {
                    public constructor()
                    public static main(arg0: java.lang.String[]): void
                    static print(arg0: java.lang.String, ...arg1: java.lang.Object[]): void
                    static printLOC(arg0: byte[]): void
                    static printCEN(arg0: byte[], arg1: int): void
                    static locoff(arg0: byte[], arg1: int): long
                    static printExtra(arg0: byte[], arg1: int, arg2: int): void
                }
                class ZipCoder {
                    toString<T>(...args: any[]): any
                    getBytes(arg0: java.lang.String): byte[]
                    getBytesUTF8(arg0: java.lang.String): byte[]
                    toStringUTF8(arg0: byte[], arg1: int): java.lang.String
                    isUTF8(): boolean
                    static get<T>(...args: any[]): any
                }
                class ZipFileSystemProvider extends java.nio.file.spi.FileSystemProvider {
                    public constructor()
                    public getScheme(): java.lang.String
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    newFileSystem<T>(...args: any[]): any
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
                    public newDirectoryStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                    public newFileChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    public newInputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.InputStream
                    public newOutputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    readAttributes<T>(...args: any[]): any
                    public readSymbolicLink<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.nio.file.Path
                    public setAttribute<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.String, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): void
                    removeFileSystem<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: com.sun.nio.zipfs.ZipFileSystem): void
                }
                class ZipFileAttributes implements java.nio.file.attribute.BasicFileAttributes {
                    constructor(arg0: com.sun.nio.zipfs.ZipFileSystem$Entry)
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
                    toString<T>(...args: any[]): any
                }
                class ZipFileSystem extends java.nio.file.FileSystem {
                    cen: byte[]
                    constructor(arg0: com.sun.nio.zipfs.ZipFileSystemProvider, arg1: java.nio.file.Path, arg2: java.util.Map<java.lang.String, any>)
                    public provider(): java.nio.file.spi.FileSystemProvider
                    public getSeparator(): java.lang.String
                    public isOpen(): boolean
                    public isReadOnly(): boolean
                    public getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
                    getDefaultDir(): com.sun.nio.zipfs.ZipPath
                    getPath<T>(...args: any[]): any
                    public getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
                    public newWatchService(): java.nio.file.WatchService
                    getFileStore(arg0: com.sun.nio.zipfs.ZipPath): java.nio.file.FileStore
                    public getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
                    public supportedFileAttributeViews(): java.util.Set<java.lang.String>
                    toString<T>(...args: any[]): any
                    getZipFile(): java.nio.file.Path
                    public getPathMatcher(arg0: java.lang.String): java.nio.file.PathMatcher
                    public close(): void
                    getFileAttributes(arg0: byte[]): com.sun.nio.zipfs.ZipFileAttributes
                    setTimes(arg0: byte[], arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime, arg3: java.nio.file.attribute.FileTime): void
                    exists(arg0: byte[]): boolean
                    isDirectory(arg0: byte[]): boolean
                    iteratorOf(arg0: byte[], arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.util.Iterator<java.nio.file.Path>
                    createDirectory(arg0: byte[], ...arg1: java.nio.file.attribute.FileAttribute<any>[]): void
                    copyFile(arg0: boolean, arg1: byte[], arg2: byte[], ...arg3: java.nio.file.CopyOption[]): void
                    newOutputStream(arg0: byte[], ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    newInputStream(arg0: byte[]): java.io.InputStream
                    newByteChannel(arg0: byte[], arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                    newFileChannel(arg0: byte[], arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    getBytes(arg0: java.lang.String): byte[]
                    getString(arg0: byte[]): java.lang.String
                    protected finalize(): void
                    readFullyAt(arg0: byte[], arg1: int, arg2: long, arg3: long): long
                    public deleteFile(arg0: byte[], arg1: boolean): void
                    static zerror(arg0: java.lang.String): void
                    static access$000(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: com.sun.nio.zipfs.ZipFileSystem$Entry): void
                    static access$100(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: java.nio.file.Path): void
                    static access$200(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: java.util.zip.Inflater): void
                    static access$300(arg0: com.sun.nio.zipfs.ZipFileSystem): java.util.Set
                    static access$400(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: com.sun.nio.zipfs.ZipFileSystem$Entry): long
                    static access$500(arg0: com.sun.nio.zipfs.ZipFileSystem): void
                    static access$600(arg0: com.sun.nio.zipfs.ZipFileSystem): java.util.zip.Deflater
                    static access$700(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: java.util.zip.Deflater): void
                    static access$800(): boolean
                    static access$900(arg0: com.sun.nio.zipfs.ZipFileSystem, arg1: byte[]): com.sun.nio.zipfs.ZipFileSystem$Entry
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
                    static LOCSIG<T>(...args: any[]): any
                    static EXTSIG: long
                    static CENSIG<T>(...args: any[]): any
                    static ENDSIG: long
                    static LOCHDR: int
                    static EXTHDR: int
                    static CENHDR: int
                    static ENDHDR: int
                    static LOCVER<T>(...args: any[]): any
                    static LOCFLG<T>(...args: any[]): any
                    static LOCHOW<T>(...args: any[]): any
                    static LOCTIM<T>(...args: any[]): any
                    static LOCCRC<T>(...args: any[]): any
                    static LOCSIZ<T>(...args: any[]): any
                    static LOCLEN<T>(...args: any[]): any
                    static LOCNAM<T>(...args: any[]): any
                    static LOCEXT<T>(...args: any[]): any
                    static EXTCRC<T>(...args: any[]): any
                    static EXTSIZ<T>(...args: any[]): any
                    static EXTLEN<T>(...args: any[]): any
                    static CENVEM<T>(...args: any[]): any
                    static CENVER<T>(...args: any[]): any
                    static CENFLG<T>(...args: any[]): any
                    static CENHOW<T>(...args: any[]): any
                    static CENTIM<T>(...args: any[]): any
                    static CENCRC<T>(...args: any[]): any
                    static CENSIZ<T>(...args: any[]): any
                    static CENLEN<T>(...args: any[]): any
                    static CENNAM<T>(...args: any[]): any
                    static CENEXT<T>(...args: any[]): any
                    static CENCOM<T>(...args: any[]): any
                    static CENDSK<T>(...args: any[]): any
                    static CENATT<T>(...args: any[]): any
                    static CENATX<T>(...args: any[]): any
                    static CENOFF<T>(...args: any[]): any
                    static ENDSUB<T>(...args: any[]): any
                    static ENDTOT<T>(...args: any[]): any
                    static ENDSIZ<T>(...args: any[]): any
                    static ENDOFF<T>(...args: any[]): any
                    static ENDCOM<T>(...args: any[]): any
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
                    static ZIP64_ENDTOD<T>(...args: any[]): any
                    static ZIP64_ENDTOT<T>(...args: any[]): any
                    static ZIP64_ENDSIZ<T>(...args: any[]): any
                    static ZIP64_ENDOFF<T>(...args: any[]): any
                    static ZIP64_ENDEXT: int
                    static ZIP64_LOCDSK: int
                    static ZIP64_LOCOFF<T>(...args: any[]): any
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
                }
                class ZipPath implements java.nio.file.Path {
                    constructor(...args: any[])
                    getRoot<T>(...args: any[]): any
                    public getFileName(): java.nio.file.Path
                    getParent<T>(...args: any[]): any
                    public getNameCount(): int
                    getName<T>(...args: any[]): any
                    subpath<T>(...args: any[]): any
                    toRealPath<T>(...args: any[]): any
                    isHidden(): boolean
                    toAbsolutePath<T>(...args: any[]): any
                    public toUri(): java.net.URI
                    public relativize(arg0: java.nio.file.Path): java.nio.file.Path
                    getFileSystem<T>(...args: any[]): any
                    public isAbsolute(): boolean
                    resolve<T>(...args: any[]): any
                    resolveSibling<T>(...args: any[]): any
                    startsWith<T>(...args: any[]): any
                    endsWith<T>(...args: any[]): any
                    public normalize(): java.nio.file.Path
                    getResolvedPath(): byte[]
                    toString<T>(...args: any[]): any
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    compareTo<T>(...args: any[]): any
                    register<T>(...args: any[]): any
                    public toFile(): java.io.File
                    public iterator(): java.util.Iterator<java.nio.file.Path>
                    createDirectory(...arg0: java.nio.file.attribute.FileAttribute<any>[]): void
                    newInputStream(...arg0: java.nio.file.OpenOption[]): java.io.InputStream
                    newDirectoryStream(arg0: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                    delete(): void
                    deleteIfExists(): void
                    getAttributes(): com.sun.nio.zipfs.ZipFileAttributes
                    setAttribute(arg0: java.lang.String, arg1: java.lang.Object, ...arg2: java.nio.file.LinkOption[]): void
                    setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                    readAttributes(arg0: java.lang.String, ...arg1: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    getFileStore(): java.nio.file.FileStore
                    isSameFile(arg0: java.nio.file.Path): boolean
                    newByteChannel(arg0: java.util.Set<java.nio.file.OpenOption>, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                    newFileChannel(arg0: java.util.Set<java.nio.file.OpenOption>, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    checkAccess(...arg0: java.nio.file.AccessMode[]): void
                    exists(): boolean
                    newOutputStream(...arg0: java.nio.file.OpenOption[]): java.io.OutputStream
                    move(arg0: com.sun.nio.zipfs.ZipPath, ...arg1: java.nio.file.CopyOption[]): void
                    copy(arg0: com.sun.nio.zipfs.ZipPath, ...arg1: java.nio.file.CopyOption[]): void
                }
                class ZipUtils {
                    constructor()
                    public static writeShort(arg0: java.io.OutputStream, arg1: int): void
                    public static writeInt(arg0: java.io.OutputStream, arg1: long): void
                    public static writeLong(arg0: java.io.OutputStream, arg1: long): void
                    static writeBytes<T>(...args: any[]): any
                    public static toDirectoryPath(arg0: byte[]): byte[]
                    public static dosToJavaTime(arg0: long): long
                    public static javaToDosTime(arg0: long): long
                    public static winToJavaTime(arg0: long): long
                    public static javaToWinTime(arg0: long): long
                    public static unixToJavaTime(arg0: long): long
                    public static javaToUnixTime(arg0: long): long
                    public static toRegexPattern(arg0: java.lang.String): java.lang.String
                }
                
            }
            
        }
        
    }
    
}
