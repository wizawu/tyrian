declare namespace sun {
    namespace nio {
        namespace fs {
            abstract class AbstractWatchService implements java.nio.file.WatchService {
                protected constructor()
                public poll(): java.nio.file.WatchKey
                public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): java.nio.file.WatchKey
                public take(): java.nio.file.WatchKey
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}