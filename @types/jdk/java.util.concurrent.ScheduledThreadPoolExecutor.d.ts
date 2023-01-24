declare namespace java {
  namespace util {
    namespace concurrent {
      class ScheduledThreadPoolExecutor
        extends java.util.concurrent.ThreadPoolExecutor
        implements java.util.concurrent.ScheduledExecutorService
      {
        removeOnCancel: boolean
        canRunInCurrentRunState(arg0: java.util.concurrent.RunnableScheduledFuture<unknown>): boolean
        reExecutePeriodic(arg0: java.util.concurrent.RunnableScheduledFuture<unknown>): void
        onShutdown(): void
        protected decorateTask<V>(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: java.util.concurrent.RunnableScheduledFuture<V>
        ): java.util.concurrent.RunnableScheduledFuture<V>
        protected decorateTask<V>(
          arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$lambda<V>,
          arg1: java.util.concurrent.RunnableScheduledFuture<V>
        ): java.util.concurrent.RunnableScheduledFuture<V>
        public constructor(arg0: number | java.lang.Integer)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$lambda
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda,
          arg2: java.util.concurrent.RejectedExecutionHandler | java.util.concurrent.RejectedExecutionHandler$$lambda
        )
        triggerTime(arg0: number | java.lang.Long): number
        public schedule(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: number | java.lang.Long,
          arg2: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<unknown>
        public schedule<V>(
          arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$lambda<V>,
          arg1: number | java.lang.Long,
          arg2: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<V>
        public scheduleAtFixedRate(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<unknown>
        public scheduleWithFixedDelay(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<unknown>
        public execute(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
        public submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.Future<unknown>
        public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: T): java.util.concurrent.Future<T>
        public submit<T>(
          arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$lambda<T>
        ): java.util.concurrent.Future<T>
        public setContinueExistingPeriodicTasksAfterShutdownPolicy(arg0: boolean | java.lang.Boolean): void
        public getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean
        public setExecuteExistingDelayedTasksAfterShutdownPolicy(arg0: boolean | java.lang.Boolean): void
        public getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean
        public setRemoveOnCancelPolicy(arg0: boolean | java.lang.Boolean): void
        public getRemoveOnCancelPolicy(): boolean
        public shutdown(): void
        public shutdownNow(): java.util.List<java.lang.Runnable>
        public getQueue(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
      }
    }
  }
}
