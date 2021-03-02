declare namespace java {
  namespace util {
    namespace concurrent {

      class Semaphore implements java.io.Serializable {
        public constructor(arg0: int)
        public constructor(arg0: int, arg1: boolean)
        public acquire(): void
        public acquireUninterruptibly(): void
        public tryAcquire(): boolean
        public tryAcquire(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
        public release(): void
        public acquire(arg0: int): void
        public acquireUninterruptibly(arg0: int): void
        public tryAcquire(arg0: int): boolean
        public tryAcquire(arg0: int, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
        public release(arg0: int): void
        public availablePermits(): int
        public drainPermits(): int
        protected reducePermits(arg0: int): void
        public isFair(): boolean
        public hasQueuedThreads(): boolean
        public getQueueLength(): int
        protected getQueuedThreads(): java.util.Collection<java.lang.Thread>
        public toString(): java.lang.String
      }

    }
  }
}
