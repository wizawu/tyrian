declare namespace java {
    namespace nio {
        namespace file {
            abstract class FileSystem implements java.io.Closeable {
                protected constructor()
                public provider(): java.nio.file.spi.FileSystemProvider
                public close(): void
                public isOpen(): boolean
                public isReadOnly(): boolean
                public getSeparator(): string
                public getRootDirectories(): java.lang.Iterable<java.nio.file.Path>
                public getFileStores(): java.lang.Iterable<java.nio.file.FileStore>
                public supportedFileAttributeViews(): java.util.Set<java.lang.String>
                public getPath(arg0: java.lang.String | string, ...arg1: java.lang.String[]): java.nio.file.Path
                public getPathMatcher(arg0: java.lang.String | string): java.nio.file.PathMatcher
                public getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService
                public newWatchService(): java.nio.file.WatchService
                public static class: java.lang.Class<any>
            }
        }
    }
}