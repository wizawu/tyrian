declare namespace java {
  namespace util {
    namespace concurrent {

      interface ExecutorService extends java.util.concurrent.Executor {
        shutdown(): void
        shutdownNow(): java.util.List<java.lang.Runnable>
        isShutdown(): boolean
        isTerminated(): boolean
        awaitTermination(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
        submit<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$lambda<T>): java.util.concurrent.Future<T>
        submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: T): java.util.concurrent.Future<T>
        submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.Future<unknown>
        invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): java.util.List<java.util.concurrent.Future<T>>
        invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): java.util.List<java.util.concurrent.Future<T>>
        invokeAny<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): T
        invokeAny<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): T
      }

    }
  }
}
