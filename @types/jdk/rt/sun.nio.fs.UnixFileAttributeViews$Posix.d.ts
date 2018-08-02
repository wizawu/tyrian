declare namespace sun {
    namespace nio {
        namespace fs {
class UnixFileAttributeViews$Posix extends sun.nio.fs.UnixFileAttributeViews$Basic implements java.nio.file.attribute.PosixFileAttributeView {
    public name(): string
    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public readAttributes(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.lang.Object>
    public readAttributes(): sun.nio.fs.UnixFileAttributes
    public setPermissions(arg0: java.util.Set<java.nio.file.attribute.PosixFilePermission>): void
    public setOwner(arg0: java.nio.file.attribute.UserPrincipal): void
    public getOwner(): java.nio.file.attribute.UserPrincipal
    public setGroup(arg0: java.nio.file.attribute.GroupPrincipal): void
    public readAttributes(): java.nio.file.attribute.BasicFileAttributes
    public readAttributes(): java.nio.file.attribute.PosixFileAttributes
    public static class: java.lang.Class<any>
}

        }
    }
}