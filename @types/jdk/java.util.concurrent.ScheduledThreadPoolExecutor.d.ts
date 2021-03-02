declare namespace java {
  namespace util {
    namespace concurrent {

      class ScheduledThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor implements java.util.concurrent.ScheduledExecutorService {
        removeOnCancel: boolean
        canRunInCurrentRunState(arg0: java.util.concurrent.RunnableScheduledFuture<unknown>): boolean
        reExecutePeriodic(arg0: java.util.concurrent.RunnableScheduledFuture<unknown>): void
        onShutdown(): void
        protected decorateTask<V>(arg0: java.lang.Runnable, arg1: java.util.concurrent.RunnableScheduledFuture<V>): java.util.concurrent.RunnableScheduledFuture<V>
        protected decorateTask<V>(arg0: java.util.concurrent.Callable<V>, arg1: java.util.concurrent.RunnableScheduledFuture<V>): java.util.concurrent.RunnableScheduledFuture<V>
        public constructor(arg0: int)
        public constructor(arg0: int, arg1: java.util.concurrent.ThreadFactory)
        public constructor(arg0: int, arg1: java.util.concurrent.RejectedExecutionHandler)
        public constructor(arg0: int, arg1: java.util.concurrent.ThreadFactory, arg2: java.util.concurrent.RejectedExecutionHandler)
        triggerTime(arg0: long): long
        public schedule(arg0: java.lang.Runnable, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<unknown>
        public schedule<V>(arg0: java.util.concurrent.Callable<V>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
        public scheduleAtFixedRate(arg0: java.lang.Runnable, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<unknown>
        public scheduleWithFixedDelay(arg0: java.lang.Runnable, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<unknown>
        public execute(arg0: java.lang.Runnable): void
        public submit(arg0: java.lang.Runnable): java.util.concurrent.Future<unknown>
        public submit<T>(arg0: java.lang.Runnable, arg1: T): java.util.concurrent.Future<T>
        public submit<T>(arg0: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
        public setContinueExistingPeriodicTasksAfterShutdownPolicy(arg0: boolean): void
        public getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean
        public setExecuteExistingDelayedTasksAfterShutdownPolicy(arg0: boolean): void
        public getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean
        public setRemoveOnCancelPolicy(arg0: boolean): void
        public getRemoveOnCancelPolicy(): boolean
        public shutdown(): void
        public shutdownNow(): java.util.List<java.lang.Runnable>
        public getQueue(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
      }

    }
  }
}
