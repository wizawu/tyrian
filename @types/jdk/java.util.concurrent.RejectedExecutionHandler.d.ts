declare namespace java {
  namespace util {
    namespace concurrent {
      interface RejectedExecutionHandler$$lambda {
        (arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.util.concurrent.ThreadPoolExecutor): void
      }

      interface RejectedExecutionHandler {
        rejectedExecution(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: java.util.concurrent.ThreadPoolExecutor
        ): void
      }
    }
  }
}
