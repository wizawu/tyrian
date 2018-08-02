declare namespace sun {
    namespace nio {
        namespace ch {
abstract class AsynchronousFileChannelImpl extends java.nio.channels.AsynchronousFileChannel {
    protected closeLock: java.util.concurrent.locks.ReadWriteLock
    protected closed: boolean
    protected fdObj: java.io.FileDescriptor
    protected reading: boolean
    protected writing: boolean
    protected executor: java.util.concurrent.ExecutorService
    protected constructor(arg0: java.io.FileDescriptor, arg1: boolean, arg2: boolean, arg3: java.util.concurrent.ExecutorService)
    public isOpen(): boolean
    protected begin(): void
    protected end(): void
    protected end(arg0: boolean): void
    public lock(arg0: long, arg1: long, arg2: boolean): java.util.concurrent.Future<java.nio.channels.FileLock>
    public lock<A>(arg0: long, arg1: long, arg2: boolean, arg3: A, arg4: java.nio.channels.CompletionHandler<java.nio.channels.FileLock, A>): void
    protected addToFileLockTable(arg0: long, arg1: long, arg2: boolean): sun.nio.ch.FileLockImpl
    protected removeFromFileLockTable(arg0: sun.nio.ch.FileLockImpl): void
    protected implRelease(arg0: sun.nio.ch.FileLockImpl): void
    public read(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
    public read<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
    public write(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
    public write<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
    public static class: java.lang.Class<any>
}

        }
    }
}