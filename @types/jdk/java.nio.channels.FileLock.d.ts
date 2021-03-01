declare namespace java {
  namespace nio {
    namespace channels {

      abstract class FileLock implements java.lang.AutoCloseable {

        protected constructor(arg0: java.nio.channels.FileChannel, arg1: long, arg2: long, arg3: boolean)
        protected constructor(arg0: java.nio.channels.AsynchronousFileChannel, arg1: long, arg2: long, arg3: boolean)
        public readonly channel(): java.nio.channels.FileChannel
        public acquiredBy(): java.nio.channels.Channel
        public readonly position(): long
        public readonly size(): long
        public readonly isShared(): boolean
        public readonly overlaps(arg0: long, arg1: long): boolean
        public abstract isValid(): boolean
        public abstract release(): void
        public readonly close(): void
        public readonly toString(): java.lang.String
      }

    }
  }
}
