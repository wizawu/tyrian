declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
class ZipFileSystem extends java.nio.file.FileSystem {
    public provider(): java.nio.file.spi.FileSystemProvider
    public getSeparator(): string
    public isOpen(): boolean
    public isReadOnly(): boolean
    public getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
    public getPath(arg0: java.lang.String | string, ...arg1: java.lang.String[]): com.sun.nio.zipfs.ZipPath
    public getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
    public newWatchService(): java.nio.file.WatchService
    public getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
    public supportedFileAttributeViews(): java.util.Set<java.lang.String>
    public toString(): string
    public getPathMatcher(arg0: java.lang.String | string): java.nio.file.PathMatcher
    public close(): void
    protected finalize(): void
    public deleteFile(arg0: byte[], arg1: boolean): void
    public getPath(arg0: java.lang.String | string, arg1: java.lang.String[]): java.nio.file.Path
    public static class: java.lang.Class<any>
}

            }
        }
    }
}