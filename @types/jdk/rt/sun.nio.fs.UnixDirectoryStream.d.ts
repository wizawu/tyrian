declare namespace sun {
    namespace nio {
        namespace fs {
            class UnixDirectoryStream implements java.nio.file.DirectoryStream<java.nio.file.Path> {
                protected directory(): sun.nio.fs.UnixPath
                protected readLock(): java.util.concurrent.locks.Lock
                protected writeLock(): java.util.concurrent.locks.Lock
                protected isOpen(): boolean
                protected closeImpl(): boolean
                public close(): void
                protected iterator(arg0: java.nio.file.DirectoryStream<java.nio.file.Path> | java.nio.file.DirectoryStream$$Lambda<java.nio.file.Path>): java.util.Iterator<java.nio.file.Path>
                public iterator(): java.util.Iterator<java.nio.file.Path>
                public static class: java.lang.Class<any>
            }
        }
    }
}