declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class FileLockTable {
                protected constructor()
                public static newSharedFileLockTable(arg0: java.nio.channels.Channel, arg1: java.io.FileDescriptor): sun.nio.ch.FileLockTable
                public add(arg0: java.nio.channels.FileLock): void
                public remove(arg0: java.nio.channels.FileLock): void
                public removeAll(): java.util.List<java.nio.channels.FileLock>
                public replace(arg0: java.nio.channels.FileLock, arg1: java.nio.channels.FileLock): void
                public static class: java.lang.Class<any>
            }
        }
    }
}