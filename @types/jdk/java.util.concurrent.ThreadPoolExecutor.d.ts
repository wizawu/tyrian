declare namespace java {
  namespace util {
    namespace concurrent {
      class ThreadPoolExecutor extends java.util.concurrent.AbstractExecutorService {
        tryTerminate(): void
        reject(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
        onShutdown(): void
        runWorker(arg0: java.util.concurrent.ThreadPoolExecutor$Worker): void
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit,
          arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit,
          arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>,
          arg5: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit,
          arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>,
          arg5: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$lambda
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit,
          arg4: java.util.concurrent.BlockingQueue<java.lang.Runnable>,
          arg5: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda,
          arg6: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$lambda
        )
        public execute(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
        public shutdown(): void
        public shutdownNow(): java.util.List<java.lang.Runnable>
        public isShutdown(): boolean
        isStopped(): boolean
        public isTerminating(): boolean
        public isTerminated(): boolean
        public awaitTermination(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
        protected finalize(): void
        public setThreadFactory(
          arg0: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda
        ): void
        public getThreadFactory(): java.util.concurrent.ThreadFactory
        public setRejectedExecutionHandler(
          arg0: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$lambda
        ): void
        public getRejectedExecutionHandler(): java.util.concurrent.RejectedExecutionHandler
        public setCorePoolSize(arg0: number | java.lang.Integer): void
        public getCorePoolSize(): number
        public prestartCoreThread(): boolean
        ensurePrestart(): void
        public prestartAllCoreThreads(): number
        public allowsCoreThreadTimeOut(): boolean
        public allowCoreThreadTimeOut(arg0: boolean | java.lang.Boolean): void
        public setMaximumPoolSize(arg0: number | java.lang.Integer): void
        public getMaximumPoolSize(): number
        public setKeepAliveTime(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): void
        public getKeepAliveTime(arg0: java.util.concurrent.TimeUnit): number
        public getQueue(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
        public remove(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): boolean
        public purge(): void
        public getPoolSize(): number
        public getActiveCount(): number
        public getLargestPoolSize(): number
        public getTaskCount(): number
        public getCompletedTaskCount(): number
        public toString(): java.lang.String
        protected beforeExecute(arg0: java.lang.Thread, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): void
        protected afterExecute(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.lang.Throwable): void
        protected terminated(): void
      }
    }
  }
}
