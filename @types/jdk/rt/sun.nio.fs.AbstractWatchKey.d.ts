declare namespace sun {
    namespace nio {
        namespace fs {
abstract class AbstractWatchKey implements java.nio.file.WatchKey {
    protected constructor(arg0: java.nio.file.Path, arg1: sun.nio.fs.AbstractWatchService)
    public watchable(): java.nio.file.Path
    public pollEvents(): java.util.List<java.nio.file.WatchEvent<any>>
    public reset(): boolean
    public watchable(): java.nio.file.Watchable
    public static class: java.lang.Class<any>
}

        }
    }
}