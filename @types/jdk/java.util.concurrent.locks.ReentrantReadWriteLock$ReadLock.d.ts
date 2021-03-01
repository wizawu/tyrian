declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        class ReentrantReadWriteLock$ReadLock implements java.util.concurrent.locks.Lock, java.io.Serializable {

          protected constructor(arg0: java.util.concurrent.locks.ReentrantReadWriteLock)
          public lock(): void
          public lockInterruptibly(): void
          public tryLock(): boolean
          public tryLock(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
          public unlock(): void
          public newCondition(): java.util.concurrent.locks.Condition
          public toString(): java.lang.String
        }

      }
    }
  }
}
