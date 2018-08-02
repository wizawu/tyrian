declare namespace sun {
    namespace nio {
        namespace fs {
abstract class UnixFileSystem extends java.nio.file.FileSystem {
    public provider(): java.nio.file.spi.FileSystemProvider
    public getSeparator(): string
    public isOpen(): boolean
    public isReadOnly(): boolean
    public close(): void
    public getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
    public getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
    public getPath(arg0: java.lang.String | string, ...arg1: java.lang.String[]): java.nio.file.Path
    public getPathMatcher(arg0: java.lang.String | string): java.nio.file.PathMatcher
    public getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
    public static class: java.lang.Class<any>
}

        }
    }
}