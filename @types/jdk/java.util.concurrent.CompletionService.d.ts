declare namespace java {
  namespace util {
    namespace concurrent {
      interface CompletionService<V> {
        submit(
          arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$lambda<V>
        ): java.util.concurrent.Future<V>
        submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: V): java.util.concurrent.Future<V>
        take(): java.util.concurrent.Future<V>
        poll(): java.util.concurrent.Future<V>
        poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.Future<V>
      }
    }
  }
}
