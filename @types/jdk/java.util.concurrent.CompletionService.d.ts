declare namespace java {
  namespace util {
    namespace concurrent {

      interface CompletionService<V> {

        submit(arg0: java.util.concurrent.Callable<V>): java.util.concurrent.Future<V>
        submit(arg0: java.lang.Runnable, arg1: V): java.util.concurrent.Future<V>
        take(): java.util.concurrent.Future<V>
        poll(): java.util.concurrent.Future<V>
        poll(arg0: long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.Future<V>
      }

    }
  }
}
