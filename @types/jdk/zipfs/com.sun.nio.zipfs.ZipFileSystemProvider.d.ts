declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
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
                    public newDirectoryStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path> | java.nio.file.DirectoryStream$Filter$$Lambda<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                    public newFileChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    public newInputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.InputStream
                    public newOutputStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...arg2: java.nio.file.LinkOption[]): A
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    public readSymbolicLink<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path): java.nio.file.Path
                    public setAttribute<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}