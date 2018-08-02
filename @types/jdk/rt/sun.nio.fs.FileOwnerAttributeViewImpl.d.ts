declare namespace sun {
    namespace nio {
        namespace fs {
class FileOwnerAttributeViewImpl implements java.nio.file.attribute.FileOwnerAttributeView , sun.nio.fs.DynamicFileAttributeView {
    public name(): string
    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public readAttributes(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.lang.Object>
    public getOwner(): java.nio.file.attribute.UserPrincipal
    public setOwner(arg0: java.nio.file.attribute.UserPrincipal): void
    public static class: java.lang.Class<any>
}

        }
    }
}