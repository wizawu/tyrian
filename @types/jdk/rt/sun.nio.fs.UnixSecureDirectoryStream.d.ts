declare namespace sun {
    namespace nio {
        namespace fs {
            class UnixSecureDirectoryStream implements java.nio.file.SecureDirectoryStream<java.nio.file.Path> {
                public close(): void
                public iterator(): java.util.Iterator<java.nio.file.Path>
                public newDirectoryStream(arg0: java.nio.file.Path, ...arg1: java.nio.file.LinkOption[]): java.nio.file.SecureDirectoryStream<java.nio.file.Path>
                public newByteChannel(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel
                public deleteFile(arg0: java.nio.file.Path): void
                public deleteDirectory(arg0: java.nio.file.Path): void
                public move(arg0: java.nio.file.Path, arg1: java.nio.file.SecureDirectoryStream<java.nio.file.Path>, arg2: java.nio.file.Path): void
                public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Class<V>): V
                public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.Class<V>, ...arg2: java.nio.file.LinkOption[]): V
                public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Object, arg1: java.lang.Class, arg2: java.nio.file.LinkOption[]): java.nio.file.attribute.FileAttributeView
                public move<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Object, arg1: java.nio.file.SecureDirectoryStream, arg2: java.lang.Object): void
                public deleteDirectory<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Object): void
                public deleteFile<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Object): void
                public newByteChannel<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Object, arg1: java.util.Set, arg2: java.nio.file.attribute.FileAttribute[]): java.nio.channels.SeekableByteChannel
                public newDirectoryStream<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.lang.Object, arg1: java.nio.file.LinkOption[]): java.nio.file.SecureDirectoryStream
                public static class: java.lang.Class<any>
            }
        }
    }
}