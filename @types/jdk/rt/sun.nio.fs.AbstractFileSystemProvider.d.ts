declare namespace sun {
    namespace nio {
        namespace fs {
abstract class AbstractFileSystemProvider extends java.nio.file.spi.FileSystemProvider {
    protected constructor()
    public setAttribute(arg0: java.nio.file.Path, arg1: java.lang.String | string, arg2: java.lang.Object, ...arg3: java.nio.file.LinkOption[]): void
    public readAttributes(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
    public delete(arg0: java.nio.file.Path): void
    public deleteIfExists(arg0: java.nio.file.Path): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}