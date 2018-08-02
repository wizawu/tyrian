declare namespace java {
    namespace nio {
        namespace file {
            interface WatchService extends java.io.Closeable {
                close(): void
                poll(): java.nio.file.WatchKey
                poll(arg0: long, arg1: java.util.concurrent.TimeUnit): java.nio.file.WatchKey
                take(): java.nio.file.WatchKey
            }
        }
    }
}