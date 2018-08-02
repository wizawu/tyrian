declare namespace sun {
    namespace nio {
        namespace fs {
            class UnixSecureDirectoryStream$PosixFileAttributeViewImpl extends sun.nio.fs.UnixSecureDirectoryStream$BasicFileAttributeViewImpl implements java.nio.file.attribute.PosixFileAttributeView {
                public name(): string
                public readAttributes(): java.nio.file.attribute.PosixFileAttributes
                public setPermissions(arg0: java.util.Set<java.nio.file.attribute.PosixFilePermission>): void
                public getOwner(): java.nio.file.attribute.UserPrincipal
                public setOwner(arg0: java.nio.file.attribute.UserPrincipal): void
                public setGroup(arg0: java.nio.file.attribute.GroupPrincipal): void
                public readAttributes(): java.nio.file.attribute.BasicFileAttributes
                public static class: java.lang.Class<any>
            }
        }
    }
}