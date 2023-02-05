declare namespace java {
  namespace nio {
    namespace file {
      interface Watchable {
        register(
          arg0: java.nio.file.WatchService,
          arg1: java.nio.file.WatchEvent$Kind<unknown>[],
          ...vargs: (java.nio.file.WatchEvent$Modifier | java.nio.file.WatchEvent$Modifier$$lambda)[]
        ): java.nio.file.WatchKey
        register(
          arg0: java.nio.file.WatchService,
          ...vargs: java.nio.file.WatchEvent$Kind<unknown>[]
        ): java.nio.file.WatchKey
      }
    }
  }
}
