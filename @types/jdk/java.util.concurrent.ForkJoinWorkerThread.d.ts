declare namespace java {
  namespace util {
    namespace concurrent {

      class ForkJoinWorkerThread extends java.lang.Thread {
        readonly pool: java.util.concurrent.ForkJoinPool
        readonly workQueue: java.util.concurrent.ForkJoinPool$WorkQueue
        protected constructor(arg0: java.util.concurrent.ForkJoinPool)
        constructor(arg0: java.util.concurrent.ForkJoinPool, arg1: java.lang.ClassLoader)
        constructor(arg0: java.util.concurrent.ForkJoinPool, arg1: java.lang.ClassLoader, arg2: java.lang.ThreadGroup, arg3: java.security.AccessControlContext)
        public getPool(): java.util.concurrent.ForkJoinPool
        public getPoolIndex(): int
        protected onStart(): void
        protected onTermination(arg0: java.lang.Throwable): void
        public run(): void
        afterTopLevelExec(): void
      }

    }
  }
}
