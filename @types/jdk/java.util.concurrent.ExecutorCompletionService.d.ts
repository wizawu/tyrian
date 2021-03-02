declare namespace java {
  namespace util {
    namespace concurrent {

      class ExecutorCompletionService<V> implements java.util.concurrent.CompletionService<V> {
        public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda)
        public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: java.util.concurrent.BlockingQueue<java.util.concurrent.Future<V>>)
        public submit(arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$lambda<V>): java.util.concurrent.Future<V>
        public submit(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: V): java.util.concurrent.Future<V>
        public take(): java.util.concurrent.Future<V>
        public poll(): java.util.concurrent.Future<V>
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.Future<V>
      }

    }
  }
}
