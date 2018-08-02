declare namespace sun {
    namespace nio {
        namespace fs {
abstract class AbstractPath implements java.nio.file.Path {
    protected constructor()
    public startsWith(arg0: java.lang.String | string): boolean
    public endsWith(arg0: java.lang.String | string): boolean
    public resolve(arg0: java.lang.String | string): java.nio.file.Path
    public resolveSibling(arg0: java.nio.file.Path): java.nio.file.Path
    public resolveSibling(arg0: java.lang.String | string): java.nio.file.Path
    public iterator(): java.util.Iterator<java.nio.file.Path>
    public toFile(): java.io.File
    public register(arg0: java.nio.file.WatchService, ...arg1: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey
    public static class: java.lang.Class<any>
}

        }
    }
}