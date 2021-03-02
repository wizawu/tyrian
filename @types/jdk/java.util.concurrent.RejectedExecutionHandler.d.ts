declare namespace java {
  namespace util {
    namespace concurrent {

      interface RejectedExecutionHandler$$lambda {
        (arg0: java.lang.Runnable, arg1: java.util.concurrent.ThreadPoolExecutor): void
      }

      interface RejectedExecutionHandler {
        rejectedExecution(arg0: java.lang.Runnable, arg1: java.util.concurrent.ThreadPoolExecutor): void
      }

    }
  }
}
