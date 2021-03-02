declare namespace java {
  namespace util {
    namespace concurrent {

      class ForkJoinPool extends java.util.concurrent.AbstractExecutorService {
        static readonly SWIDTH: int
        static readonly SMASK: int
        static readonly MAX_CAP: int
        static readonly SQMASK: int
        static readonly UNSIGNALLED: int
        static readonly SS_SEQ: int
        static readonly QLOCK: int
        static readonly OWNED: int
        static readonly FIFO: int
        static readonly SHUTDOWN: int
        static readonly TERMINATED: int
        static readonly STOP: int
        static readonly QUIET: int
        static readonly DORMANT: int
        static readonly INITIAL_QUEUE_CAPACITY: int
        static readonly MAXIMUM_QUEUE_CAPACITY: int
        static readonly TOP_BOUND_SHIFT: int
        public static readonly defaultForkJoinWorkerThreadFactory: java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory
        static readonly modifyThreadPermission: java.lang.RuntimePermission
        static readonly common: java.util.concurrent.ForkJoinPool
        static readonly COMMON_PARALLELISM: int
        stealCount: long
        readonly keepAlive: long
        indexSeed: int
        readonly bounds: int
        mode: int
        workQueues: java.util.concurrent.ForkJoinPool$WorkQueue[]
        readonly workerNamePrefix: java.lang.String
        readonly factory: java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory
        readonly ueh: java.lang.Thread$UncaughtExceptionHandler
        readonly saturate: java.util.function$.Predicate<unknown>
        ctl: long
        static readonly QA: java.lang.invoke.VarHandle
        static contextWithPermissions(...vargs: (java.security.Permission)[]): java.security.AccessControlContext
        registerWorker(arg0: java.util.concurrent.ForkJoinWorkerThread): java.util.concurrent.ForkJoinPool$WorkQueue
        deregisterWorker(arg0: java.util.concurrent.ForkJoinWorkerThread, arg1: java.lang.Throwable): void
        signalWork(): void
        runWorker(arg0: java.util.concurrent.ForkJoinPool$WorkQueue): void
        awaitJoin(arg0: java.util.concurrent.ForkJoinPool$WorkQueue, arg1: java.util.concurrent.ForkJoinTask<unknown>, arg2: number | java.lang.Long): number
        helpQuiescePool(arg0: java.util.concurrent.ForkJoinPool$WorkQueue): void
        nextTaskFor(arg0: java.util.concurrent.ForkJoinPool$WorkQueue): java.util.concurrent.ForkJoinTask<unknown>
        externalPush(arg0: java.util.concurrent.ForkJoinTask<unknown>): void
        static commonSubmitterQueue(): java.util.concurrent.ForkJoinPool$WorkQueue
        tryExternalUnpush(arg0: java.util.concurrent.ForkJoinTask<unknown>): boolean
        externalHelpComplete(arg0: java.util.concurrent.CountedCompleter<unknown>, arg1: number | java.lang.Integer): number
        helpComplete(arg0: java.util.concurrent.ForkJoinPool$WorkQueue, arg1: java.util.concurrent.CountedCompleter<unknown>, arg2: number | java.lang.Integer): number
        static getSurplusQueuedTaskCount(): number
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory | java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory$$lambda, arg2: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$lambda, arg3: boolean | java.lang.Boolean)
        public constructor(arg0: number | java.lang.Integer, arg1: java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory | java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory$$lambda, arg2: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$lambda, arg3: boolean | java.lang.Boolean, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: java.util.function$.Predicate<unknown>, arg8: number | java.lang.Long, arg9: java.util.concurrent.TimeUnit)
        public static commonPool(): java.util.concurrent.ForkJoinPool
        public invoke<T>(arg0: java.util.concurrent.ForkJoinTask<T>): T
        public execute(arg0: java.util.concurrent.ForkJoinTask<unknown>): void
        public execute(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
        public submit<T>(arg0: java.util.concurrent.ForkJoinTask<T>): java.util.concurrent.ForkJoinTask<T>
        public submit<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$lambda<T>): java.util.concurrent.ForkJoinTask<T>
        public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: T): java.util.concurrent.ForkJoinTask<T>
        public submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.ForkJoinTask<unknown>
        public invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): java.util.List<java.util.concurrent.Future<T>>
        public getFactory(): java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory
        public getUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
        public getParallelism(): number
        public static getCommonPoolParallelism(): number
        public getPoolSize(): number
        public getAsyncMode(): boolean
        public getRunningThreadCount(): number
        public getActiveThreadCount(): number
        public isQuiescent(): boolean
        public getStealCount(): number
        public getQueuedTaskCount(): number
        public getQueuedSubmissionCount(): number
        public hasQueuedSubmissions(): boolean
        protected pollSubmission(): java.util.concurrent.ForkJoinTask<unknown>
        protected drainTasksTo(arg0: java.util.Collection<unknown>): number
        public toString(): java.lang.String
        public shutdown(): void
        public shutdownNow(): java.util.List<java.lang.Runnable>
        public isTerminated(): boolean
        public isTerminating(): boolean
        public isShutdown(): boolean
        public awaitTermination(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
        public awaitQuiescence(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
        static quiesceCommonPool(): void
        public static managedBlock(arg0: java.util.concurrent.ForkJoinPool$ManagedBlocker): void
        static helpAsyncBlocker(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: java.util.concurrent.ForkJoinPool$ManagedBlocker): void
        protected newTaskFor<T>(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: T): java.util.concurrent.RunnableFuture<T>
        protected newTaskFor<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$lambda<T>): java.util.concurrent.RunnableFuture<T>
        public submit(arg0: java.util.concurrent.Callable | java.util.concurrent.Callable$$lambda): java.util.concurrent.Future
        public submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.lang.Object | any): java.util.concurrent.Future
        public submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.Future
      }

    }
  }
}
