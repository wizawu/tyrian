declare namespace sun {
    namespace nio {
        namespace fs {
abstract class AbstractUserDefinedFileAttributeView implements java.nio.file.attribute.UserDefinedFileAttributeView , sun.nio.fs.DynamicFileAttributeView {
    protected constructor()
    protected checkAccess(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
    public name(): string
    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public readAttributes(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.lang.Object>
    public static class: java.lang.Class<any>
}

        }
    }
}