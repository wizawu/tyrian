declare namespace sun {
    namespace nio {
        namespace fs {
            class UnixFileAttributes implements java.nio.file.attribute.PosixFileAttributes {
                public lastModifiedTime(): java.nio.file.attribute.FileTime
                public lastAccessTime(): java.nio.file.attribute.FileTime
                public creationTime(): java.nio.file.attribute.FileTime
                public isRegularFile(): boolean
                public isDirectory(): boolean
                public isSymbolicLink(): boolean
                public isOther(): boolean
                public size(): long
                public fileKey(): sun.nio.fs.UnixFileKey
                public owner(): java.nio.file.attribute.UserPrincipal
                public group(): java.nio.file.attribute.GroupPrincipal
                public permissions(): java.util.Set<java.nio.file.attribute.PosixFilePermission>
                public fileKey(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}