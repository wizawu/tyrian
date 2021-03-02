declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        class ReentrantLock implements java.util.concurrent.locks.Lock, java.io.Serializable {
          public constructor()
          public constructor(arg0: boolean)
          public lock(): void
          public lockInterruptibly(): void
          public tryLock(): boolean
          public tryLock(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
          public unlock(): void
          public newCondition(): java.util.concurrent.locks.Condition
          public getHoldCount(): int
          public isHeldByCurrentThread(): boolean
          public isLocked(): boolean
          public isFair(): boolean
          protected getOwner(): java.lang.Thread
          public hasQueuedThreads(): boolean
          public hasQueuedThread(arg0: java.lang.Thread): boolean
          public getQueueLength(): int
          protected getQueuedThreads(): java.util.Collection<java.lang.Thread>
          public hasWaiters(arg0: java.util.concurrent.locks.Condition): boolean
          public getWaitQueueLength(arg0: java.util.concurrent.locks.Condition): int
          protected getWaitingThreads(arg0: java.util.concurrent.locks.Condition): java.util.Collection<java.lang.Thread>
          public toString(): java.lang.String
        }

      }
    }
  }
}
