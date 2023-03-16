declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        interface TaskListener {
          started?(arg0: com.sun.source.util.TaskEvent): void
          finished?(arg0: com.sun.source.util.TaskEvent): void
        }
      }
    }
  }
}
