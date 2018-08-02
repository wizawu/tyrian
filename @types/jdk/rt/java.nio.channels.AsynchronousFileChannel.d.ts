declare namespace java {
    namespace nio {
        namespace channels {
abstract class AsynchronousFileChannel implements java.nio.channels.AsynchronousChannel {
    protected constructor()
    public static open(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, arg2: java.util.concurrent.ExecutorService, ...arg3: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.AsynchronousFileChannel
    public static open(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.nio.channels.AsynchronousFileChannel
    public size(): long
    public truncate(arg0: long): java.nio.channels.AsynchronousFileChannel
    public force(arg0: boolean): void
    public lock<A>(arg0: long, arg1: long, arg2: boolean, arg3: A, arg4: java.nio.channels.CompletionHandler<java.nio.channels.FileLock, A>): void
    public lock<A>(arg0: A, arg1: java.nio.channels.CompletionHandler<java.nio.channels.FileLock, A>): void
    public lock(arg0: long, arg1: long, arg2: boolean): java.util.concurrent.Future<java.nio.channels.FileLock>
    public lock(): java.util.concurrent.Future<java.nio.channels.FileLock>
    public tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
    public tryLock(): java.nio.channels.FileLock
    public read<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
    public read(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
    public write<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
    public write(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
    public static class: java.lang.Class<any>
}

        }
    }
}