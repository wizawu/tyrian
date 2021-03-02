declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        interface Condition {
          await(): void
          awaitUninterruptibly(): void
          awaitNanos(arg0: number | java.lang.Long): number
          await(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
          awaitUntil(arg0: java.util.Date): boolean
          signal(): void
          signalAll(): void
        }

      }
    }
  }
}
