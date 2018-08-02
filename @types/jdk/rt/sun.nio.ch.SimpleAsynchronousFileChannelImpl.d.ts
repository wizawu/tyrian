declare namespace sun {
    namespace nio {
        namespace ch {
            class SimpleAsynchronousFileChannelImpl extends sun.nio.ch.AsynchronousFileChannelImpl {
                public static open(arg0: java.io.FileDescriptor, arg1: boolean, arg2: boolean, arg3: sun.nio.ch.ThreadPool): java.nio.channels.AsynchronousFileChannel
                public close(): void
                public size(): long
                public truncate(arg0: long): java.nio.channels.AsynchronousFileChannel
                public force(arg0: boolean): void
                public tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                protected implRelease(arg0: sun.nio.ch.FileLockImpl): void
                public static class: java.lang.Class<any>
            }
        }
    }
}