declare namespace java {
    namespace util {
        namespace concurrent {
            class ForkJoinPool extends java.util.concurrent.AbstractExecutorService {
                public static defaultForkJoinWorkerThreadFactory: java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory | java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory$$Lambda, arg2: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$Lambda, arg3: boolean)
                public static commonPool(): java.util.concurrent.ForkJoinPool
                public invoke<T>(arg0: java.util.concurrent.ForkJoinTask<T>): T
                public execute<T>(arg0: java.util.concurrent.ForkJoinTask<any>): void
                public execute<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public submit<T>(arg0: java.util.concurrent.ForkJoinTask<T>): java.util.concurrent.ForkJoinTask<T>
                public submit<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.ForkJoinTask<T>
                public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.ForkJoinTask<T>
                public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.ForkJoinTask<any>
                public invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): java.util.List<java.util.concurrent.Future<T>>
                public getFactory<T>(): java.util.concurrent.ForkJoinPool$ForkJoinWorkerThreadFactory
                public getUncaughtExceptionHandler<T>(): java.lang.Thread$UncaughtExceptionHandler
                public getParallelism<T>(): int
                public static getCommonPoolParallelism<T>(): int
                public getPoolSize<T>(): int
                public getAsyncMode<T>(): boolean
                public getRunningThreadCount<T>(): int
                public getActiveThreadCount<T>(): int
                public isQuiescent<T>(): boolean
                public getStealCount<T>(): long
                public getQueuedTaskCount<T>(): long
                public getQueuedSubmissionCount<T>(): int
                public hasQueuedSubmissions<T>(): boolean
                protected pollSubmission<T>(): java.util.concurrent.ForkJoinTask<any>
                protected drainTasksTo<T>(arg0: java.util.Collection<java.util.concurrent.ForkJoinTask<any>>): int
                public toString<T>(): string
                public shutdown<T>(): void
                public shutdownNow<T>(): java.util.List<java.lang.Runnable>
                public isTerminated<T>(): boolean
                public isTerminating<T>(): boolean
                public isShutdown<T>(): boolean
                public awaitTermination<T>(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                public awaitQuiescence<T>(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                public static managedBlock<T>(arg0: java.util.concurrent.ForkJoinPool$ManagedBlocker): void
                protected newTaskFor<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.RunnableFuture<T>
                protected newTaskFor<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.RunnableFuture<T>
                public submit<T>(arg0: java.util.concurrent.Callable | java.util.concurrent.Callable$$Lambda): java.util.concurrent.Future
                public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.lang.Object): java.util.concurrent.Future
                public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.Future
                public static class: java.lang.Class<any>
            }
        }
    }
}