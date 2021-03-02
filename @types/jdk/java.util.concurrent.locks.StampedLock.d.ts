declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        class StampedLock implements java.io.Serializable {
          readLockView: java.util.concurrent.locks.StampedLock$ReadLockView
          writeLockView: java.util.concurrent.locks.StampedLock$WriteLockView
          readWriteLockView: java.util.concurrent.locks.StampedLock$ReadWriteLockView
          public constructor()
          public writeLock(): number
          public tryWriteLock(): number
          public tryWriteLock(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): number
          public writeLockInterruptibly(): number
          public readLock(): number
          public tryReadLock(): number
          public tryReadLock(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): number
          public readLockInterruptibly(): number
          public tryOptimisticRead(): number
          public validate(arg0: number | java.lang.Long): boolean
          public unlockWrite(arg0: number | java.lang.Long): void
          public unlockRead(arg0: number | java.lang.Long): void
          public unlock(arg0: number | java.lang.Long): void
          public tryConvertToWriteLock(arg0: number | java.lang.Long): number
          public tryConvertToReadLock(arg0: number | java.lang.Long): number
          public tryConvertToOptimisticRead(arg0: number | java.lang.Long): number
          public tryUnlockWrite(): boolean
          public tryUnlockRead(): boolean
          public isWriteLocked(): boolean
          public isReadLocked(): boolean
          public static isWriteLockStamp(arg0: number | java.lang.Long): boolean
          public static isReadLockStamp(arg0: number | java.lang.Long): boolean
          public static isLockStamp(arg0: number | java.lang.Long): boolean
          public static isOptimisticReadStamp(arg0: number | java.lang.Long): boolean
          public getReadLockCount(): number
          public toString(): java.lang.String
          public asReadLock(): java.util.concurrent.locks.Lock
          public asWriteLock(): java.util.concurrent.locks.Lock
          public asReadWriteLock(): java.util.concurrent.locks.ReadWriteLock
          unstampedUnlockWrite(): void
          unstampedUnlockRead(): void
        }

      }
    }
  }
}
