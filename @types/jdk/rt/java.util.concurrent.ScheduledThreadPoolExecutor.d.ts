declare namespace java {
    namespace util {
        namespace concurrent {
class ScheduledThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor implements java.util.concurrent.ScheduledExecutorService {
    protected decorateTask<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.RunnableScheduledFuture<V>): java.util.concurrent.RunnableScheduledFuture<V>
    protected decorateTask<V>(arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$Lambda<V>, arg1: java.util.concurrent.RunnableScheduledFuture<V>): java.util.concurrent.RunnableScheduledFuture<V>
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda)
    public constructor(arg0: int, arg1: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$Lambda)
    public constructor(arg0: int, arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda, arg2: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$Lambda)
    public schedule<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
    public schedule<V>(arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$Lambda<V>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
    public scheduleAtFixedRate<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
    public scheduleWithFixedDelay<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
    public execute<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public submit<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.Future<any>
    public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.Future<T>
    public submit<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.Future<T>
    public setContinueExistingPeriodicTasksAfterShutdownPolicy<T>(arg0: boolean): void
    public getContinueExistingPeriodicTasksAfterShutdownPolicy<T>(): boolean
    public setExecuteExistingDelayedTasksAfterShutdownPolicy<T>(arg0: boolean): void
    public getExecuteExistingDelayedTasksAfterShutdownPolicy<T>(): boolean
    public setRemoveOnCancelPolicy<T>(arg0: boolean): void
    public getRemoveOnCancelPolicy<T>(): boolean
    public shutdown<T>(): void
    public shutdownNow<T>(): java.util.List<java.lang.Runnable>
    public getQueue<T>(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
    public static class: java.lang.Class<any>
}

        }
    }
}