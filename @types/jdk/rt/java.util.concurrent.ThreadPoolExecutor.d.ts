declare namespace java {
    namespace util {
        namespace concurrent {
class ThreadPoolExecutor extends java.util.concurrent.AbstractExecutorService {
    public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>)
    public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, arg5: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda)
    public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, arg5: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$Lambda)
    public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, arg5: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda, arg6: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$Lambda)
    public execute(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public shutdown(): void
    public shutdownNow(): java.util.List<java.lang.Runnable>
    public isShutdown(): boolean
    public isTerminating(): boolean
    public isTerminated(): boolean
    public awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
    protected finalize(): void
    public setThreadFactory(arg0: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): void
    public getThreadFactory(): java.util.concurrent.ThreadFactory
    public setRejectedExecutionHandler(arg0: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$Lambda): void
    public getRejectedExecutionHandler(): java.util.concurrent.RejectedExecutionHandler
    public setCorePoolSize(arg0: int): void
    public getCorePoolSize(): int
    public prestartCoreThread(): boolean
    public prestartAllCoreThreads(): int
    public allowsCoreThreadTimeOut(): boolean
    public allowCoreThreadTimeOut(arg0: boolean): void
    public setMaximumPoolSize(arg0: int): void
    public getMaximumPoolSize(): int
    public setKeepAliveTime(arg0: long, arg1: java.util.concurrent.TimeUnit): void
    public getKeepAliveTime(arg0: java.util.concurrent.TimeUnit): long
    public getQueue(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
    public remove(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): boolean
    public purge(): void
    public getPoolSize(): int
    public getActiveCount(): int
    public getLargestPoolSize(): int
    public getTaskCount(): long
    public getCompletedTaskCount(): long
    public toString(): string
    protected beforeExecute(arg0: java.lang.Thread | java.lang.Thread$$Lambda, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    protected afterExecute(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.lang.Throwable): void
    protected terminated(): void
    public static class: java.lang.Class<any>
}

        }
    }
}