declare namespace java {
  namespace util {
    namespace concurrent {
      interface ScheduledExecutorService extends java.util.concurrent.ExecutorService {
        schedule(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: number | java.lang.Long,
          arg2: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<unknown>
        schedule<V>(
          arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$lambda<V>,
          arg1: number | java.lang.Long,
          arg2: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<V>
        scheduleAtFixedRate(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<unknown>
        scheduleWithFixedDelay(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long,
          arg3: java.util.concurrent.TimeUnit
        ): java.util.concurrent.ScheduledFuture<unknown>
      }
    }
  }
}
