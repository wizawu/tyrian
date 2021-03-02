declare namespace java {
  namespace util {
    namespace concurrent {

      class Semaphore implements java.io.Serializable {
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
        public acquire(): void
        public acquireUninterruptibly(): void
        public tryAcquire(): boolean
        public tryAcquire(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
        public release(): void
        public acquire(arg0: number | java.lang.Integer): void
        public acquireUninterruptibly(arg0: number | java.lang.Integer): void
        public tryAcquire(arg0: number | java.lang.Integer): boolean
        public tryAcquire(arg0: number | java.lang.Integer, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public release(arg0: number | java.lang.Integer): void
        public availablePermits(): number
        public drainPermits(): number
        protected reducePermits(arg0: number | java.lang.Integer): void
        public isFair(): boolean
        public hasQueuedThreads(): boolean
        public getQueueLength(): number
        protected getQueuedThreads(): java.util.Collection<java.lang.Thread>
        public toString(): java.lang.String
      }

    }
  }
}
