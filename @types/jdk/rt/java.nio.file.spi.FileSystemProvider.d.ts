declare namespace java {
    namespace nio {
        namespace file {
            namespace spi {
                abstract class FileSystemProvider {
                    protected constructor()
                    public static installedProviders(): java.util.List<java.nio.file.spi.FileSystemProvider>
                    public getScheme(): string
                    public newFileSystem(arg0: java.net.URI, arg1: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    public getFileSystem(arg0: java.net.URI): java.nio.file.FileSystem
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                    public newFileSystem(arg0: java.nio.file.Path, arg1: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    public newInputStream(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.InputStream
                    public newOutputStream(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.io.OutputStream
                    public newFileChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                    public newAsynchronousFileChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, arg2: java.util.concurrent.ExecutorService, ...arg3: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.AsynchronousFileChannel
                    public newByteChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                    public newDirectoryStream(arg0: java.nio.file.Path, arg1: java.nio.file.DirectoryStream$Filter<java.nio.file.Path> | java.nio.file.DirectoryStream$Filter$$Lambda<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                    public createDirectory(arg0: java.nio.file.Path, ...arg1: java.nio.file.attribute.FileAttribute<any>[]): void
                    public createSymbolicLink(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): void
                    public createLink(arg0: java.nio.file.Path, arg1: java.nio.file.Path): void
                    public delete(arg0: java.nio.file.Path): void
                    public deleteIfExists(arg0: java.nio.file.Path): boolean
                    public readSymbolicLink(arg0: java.nio.file.Path): java.nio.file.Path
                    public copy(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): void
                    public move(arg0: java.nio.file.Path, arg1: java.nio.file.Path, ...arg2: java.nio.file.CopyOption[]): void
                    public isSameFile(arg0: java.nio.file.Path, arg1: java.nio.file.Path): boolean
                    public isHidden(arg0: java.nio.file.Path): boolean
                    public getFileStore(arg0: java.nio.file.Path): java.nio.file.FileStore
                    public checkAccess(arg0: java.nio.file.Path, ...arg1: java.nio.file.AccessMode[]): void
                    public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.Class<V>, ...arg2: java.nio.file.LinkOption[]): V
                    public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...arg2: java.nio.file.LinkOption[]): A
                    public readAttributes(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    public setAttribute(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}