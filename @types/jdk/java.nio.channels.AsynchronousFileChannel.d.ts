declare namespace java {
  namespace nio {
    namespace channels {
      abstract class AsynchronousFileChannel implements java.nio.channels.AsynchronousChannel {
        protected constructor()
        public static open(
          arg0: java.nio.file.Path,
          arg1: java.util.Set<java.nio.file.OpenOption>,
          arg2: java.util.concurrent.ExecutorService,
          ...vargs: java.nio.file.attribute.FileAttribute<unknown>[]
        ): java.nio.channels.AsynchronousFileChannel
        public static open(
          arg0: java.nio.file.Path,
          ...vargs: java.nio.file.OpenOption[]
        ): java.nio.channels.AsynchronousFileChannel
        public abstract size(): number
        public abstract truncate(arg0: number | java.lang.Long): java.nio.channels.AsynchronousFileChannel
        public abstract force(arg0: boolean | java.lang.Boolean): void
        public abstract lock<A>(
          arg0: number | java.lang.Long,
          arg1: number | java.lang.Long,
          arg2: boolean | java.lang.Boolean,
          arg3: A,
          arg4: java.nio.channels.CompletionHandler<java.nio.channels.FileLock, unknown>
        ): void
        public lock<A>(arg0: A, arg1: java.nio.channels.CompletionHandler<java.nio.channels.FileLock, unknown>): void
        public abstract lock(
          arg0: number | java.lang.Long,
          arg1: number | java.lang.Long,
          arg2: boolean | java.lang.Boolean
        ): java.util.concurrent.Future<java.nio.channels.FileLock>
        public lock(): java.util.concurrent.Future<java.nio.channels.FileLock>
        public abstract tryLock(
          arg0: number | java.lang.Long,
          arg1: number | java.lang.Long,
          arg2: boolean | java.lang.Boolean
        ): java.nio.channels.FileLock
        public tryLock(): java.nio.channels.FileLock
        public abstract read<A>(
          arg0: java.nio.ByteBuffer,
          arg1: number | java.lang.Long,
          arg2: A,
          arg3: java.nio.channels.CompletionHandler<java.lang.Integer, unknown>
        ): void
        public abstract read(
          arg0: java.nio.ByteBuffer,
          arg1: number | java.lang.Long
        ): java.util.concurrent.Future<java.lang.Integer>
        public abstract write<A>(
          arg0: java.nio.ByteBuffer,
          arg1: number | java.lang.Long,
          arg2: A,
          arg3: java.nio.channels.CompletionHandler<java.lang.Integer, unknown>
        ): void
        public abstract write(
          arg0: java.nio.ByteBuffer,
          arg1: number | java.lang.Long
        ): java.util.concurrent.Future<java.lang.Integer>
      }
    }
  }
}
