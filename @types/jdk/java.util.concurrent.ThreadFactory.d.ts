declare namespace java {
  namespace util {
    namespace concurrent {
      interface ThreadFactory$$lambda {
        (arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.lang.Thread
      }

      interface ThreadFactory {
        newThread(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.lang.Thread
      }
    }
  }
}
