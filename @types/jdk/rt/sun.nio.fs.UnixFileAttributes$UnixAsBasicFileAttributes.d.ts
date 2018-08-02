declare namespace sun {
    namespace nio {
        namespace fs {
            class UnixFileAttributes$UnixAsBasicFileAttributes implements java.nio.file.attribute.BasicFileAttributes {
                public lastModifiedTime(): java.nio.file.attribute.FileTime
                public lastAccessTime(): java.nio.file.attribute.FileTime
                public creationTime(): java.nio.file.attribute.FileTime
                public isRegularFile(): boolean
                public isDirectory(): boolean
                public isSymbolicLink(): boolean
                public isOther(): boolean
                public size(): long
                public fileKey(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}