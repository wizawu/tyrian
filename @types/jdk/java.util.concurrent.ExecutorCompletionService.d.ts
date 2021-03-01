declare namespace java {
  namespace util {
    namespace concurrent {

      class ExecutorCompletionService<V> implements java.util.concurrent.CompletionService<V> {

        public constructor(arg0: java.util.concurrent.Executor)
        public constructor(arg0: java.util.concurrent.Executor, arg1: java.util.concurrent.BlockingQueue<java.util.concurrent.Future<V>>)
        public submit(arg0: java.util.concurrent.Callable<V>): java.util.concurrent.Future<V>
        public submit(arg0: java.lang.Runnable, arg1: V): java.util.concurrent.Future<V>
        public take(): java.util.concurrent.Future<V>
        public poll(): java.util.concurrent.Future<V>
        public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.Future<V>
      }

    }
  }
}
