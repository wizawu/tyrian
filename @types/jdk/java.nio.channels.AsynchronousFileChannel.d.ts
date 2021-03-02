declare namespace java {
  namespace nio {
    namespace channels {

      abstract class AsynchronousFileChannel implements java.nio.channels.AsynchronousChannel {
        protected constructor()
        public static open(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, arg2: java.util.concurrent.ExecutorService, ...arg3: java.nio.file.attribute.FileAttribute<unknown>[]): java.nio.channels.AsynchronousFileChannel
        public static open(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.nio.channels.AsynchronousFileChannel
        public abstract size(): long
        public abstract truncate(arg0: long): java.nio.channels.AsynchronousFileChannel
        public abstract force(arg0: boolean): void
        public abstract lock<A>(arg0: long, arg1: long, arg2: boolean, arg3: A, arg4: java.nio.channels.CompletionHandler<java.nio.channels.FileLock,unknown>): void
        public lock<A>(arg0: A, arg1: java.nio.channels.CompletionHandler<java.nio.channels.FileLock,unknown>): void
        public abstract lock(arg0: long, arg1: long, arg2: boolean): java.util.concurrent.Future<java.nio.channels.FileLock>
        public lock(): java.util.concurrent.Future<java.nio.channels.FileLock>
        public abstract tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
        public tryLock(): java.nio.channels.FileLock
        public abstract read<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer,unknown>): void
        public abstract read(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
        public abstract write<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: A, arg3: java.nio.channels.CompletionHandler<java.lang.Integer,unknown>): void
        public abstract write(arg0: java.nio.ByteBuffer, arg1: long): java.util.concurrent.Future<java.lang.Integer>
      }

    }
  }
}
