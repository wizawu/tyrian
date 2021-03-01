declare namespace java {
  namespace util {
    namespace concurrent {

      class ThreadPoolExecutor extends java.util.concurrent.AbstractExecutorService {

        readonly tryTerminate(): void
        readonly reject(arg0: java.lang.Runnable): void
        onShutdown(): void
        readonly runWorker(arg0: java.util.concurrent.ThreadPoolExecutor$Worker): void
        public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>)
        public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, arg5: java.util.concurrent.ThreadFactory)
        public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, arg5: java.util.concurrent.RejectedExecutionHandler)
        public constructor(arg0: int, arg1: int, arg2: long, arg3: java.util.concurrent.TimeUnit, arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, arg5: java.util.concurrent.ThreadFactory, arg6: java.util.concurrent.RejectedExecutionHandler)
        public execute(arg0: java.lang.Runnable): void
        public shutdown(): void
        public shutdownNow(): java.util.List<java.lang.Runnable>
        public isShutdown(): boolean
        isStopped(): boolean
        public isTerminating(): boolean
        public isTerminated(): boolean
        public awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
        protected finalize(): void
        public setThreadFactory(arg0: java.util.concurrent.ThreadFactory): void
        public getThreadFactory(): java.util.concurrent.ThreadFactory
        public setRejectedExecutionHandler(arg0: java.util.concurrent.RejectedExecutionHandler): void
        public getRejectedExecutionHandler(): java.util.concurrent.RejectedExecutionHandler
        public setCorePoolSize(arg0: int): void
        public getCorePoolSize(): int
        public prestartCoreThread(): boolean
        ensurePrestart(): void
        public prestartAllCoreThreads(): int
        public allowsCoreThreadTimeOut(): boolean
        public allowCoreThreadTimeOut(arg0: boolean): void
        public setMaximumPoolSize(arg0: int): void
        public getMaximumPoolSize(): int
        public setKeepAliveTime(arg0: long, arg1: java.util.concurrent.TimeUnit): void
        public getKeepAliveTime(arg0: java.util.concurrent.TimeUnit): long
        public getQueue(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
        public remove(arg0: java.lang.Runnable): boolean
        public purge(): void
        public getPoolSize(): int
        public getActiveCount(): int
        public getLargestPoolSize(): int
        public getTaskCount(): long
        public getCompletedTaskCount(): long
        public toString(): java.lang.String
        protected beforeExecute(arg0: java.lang.Thread, arg1: java.lang.Runnable): void
        protected afterExecute(arg0: java.lang.Runnable, arg1: java.lang.Throwable): void
        protected terminated(): void
      }

    }
  }
}
