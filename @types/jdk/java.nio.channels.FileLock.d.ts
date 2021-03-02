declare namespace java {
  namespace nio {
    namespace channels {

      abstract class FileLock implements java.lang.AutoCloseable {
        protected constructor(arg0: java.nio.channels.FileChannel, arg1: number | java.lang.Long, arg2: number | java.lang.Long, arg3: boolean | java.lang.Boolean)
        protected constructor(arg0: java.nio.channels.AsynchronousFileChannel, arg1: number | java.lang.Long, arg2: number | java.lang.Long, arg3: boolean | java.lang.Boolean)
        public channel(): java.nio.channels.FileChannel
        public acquiredBy(): java.nio.channels.Channel
        public position(): number
        public size(): number
        public isShared(): boolean
        public overlaps(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
        public abstract isValid(): boolean
        public abstract release(): void
        public close(): void
        public toString(): java.lang.String
      }

    }
  }
}
