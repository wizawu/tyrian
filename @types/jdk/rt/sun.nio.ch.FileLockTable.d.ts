declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class FileLockTable {
                protected constructor()
                public static newSharedFileLockTable(arg0: java.nio.channels.Channel, arg1: java.io.FileDescriptor): sun.nio.ch.FileLockTable
                public abstract add(arg0: java.nio.channels.FileLock): void
                public abstract remove(arg0: java.nio.channels.FileLock): void
                public abstract removeAll(): java.util.List<java.nio.channels.FileLock>
                public abstract replace(arg0: java.nio.channels.FileLock, arg1: java.nio.channels.FileLock): void
                public static class: java.lang.Class<any>
            }
        }
    }
}