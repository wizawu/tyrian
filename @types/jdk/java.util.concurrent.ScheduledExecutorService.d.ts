declare namespace java {
  namespace util {
    namespace concurrent {

      interface ScheduledExecutorService extends java.util.concurrent.ExecutorService {
        schedule(arg0: java.lang.Runnable, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<unknown>
        schedule<V>(arg0: java.util.concurrent.Callable<V>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
        scheduleAtFixedRate(arg0: java.lang.Runnable, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<unknown>
        scheduleWithFixedDelay(arg0: java.lang.Runnable, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<unknown>
      }

    }
  }
}
