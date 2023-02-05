declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {
        interface Lock {
          lock(): void
          lockInterruptibly(): void
          tryLock(): boolean
          tryLock(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
          unlock(): void
          newCondition(): java.util.concurrent.locks.Condition
        }
      }
    }
  }
}
