declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class AsynchronousFileChannelImpl extends java.nio.channels.AsynchronousFileChannel {
                protected readonly closeLock: java.util.concurrent.locks.ReadWriteLock
                protected closed: boolean
                protected readonly fdObj: java.io.FileDescriptor
                protected readonly reading: boolean
                protected readonly writing: boolean
                protected readonly executor: java.util.concurrent.ExecutorService
                protected constructor(arg0: java.io.FileDescriptor, arg1: boolean, arg2: boolean, arg3: java.util.concurrent.ExecutorService)
                public isOpen(): boolean
                protected begin(): void
                protected end(): void
                protected end(arg0: boolean): void
                public lock(arg0: long, arg1: long, arg2: boolean): java.util.concurrent.Future<java.nio.channels.FileLock>
                public lock<A>(arg0: long, arg1: long, arg2: boolean, arg3: A, arg4: java.nio.channels.CompletionHandler<java.nio.channels.FileLock, A>): void
                protected addToFileLockTable<A>(arg0: long, arg1: long, arg2: boolean): sun.nio.ch.FileLockImpl
                protected removeFromFileLockTable<A>(arg0: sun.nio.ch.FileLockImpl): void
                protected abstract implRelease<A>(arg0: sun.nio.ch.FileLockImpl): void
                public read<A>(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
                public read<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public write<A>(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
                public write<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public static class: java.lang.Class<any>
            }
            interface AsynchronousFileChannelImpl$$Lambda extends java.nio.channels.AsynchronousFileChannel {
                (arg0: sun.nio.ch.FileLockImpl): void
            }
        }
    }
}