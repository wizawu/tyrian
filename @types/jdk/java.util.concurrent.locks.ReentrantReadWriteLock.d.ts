declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        class ReentrantReadWriteLock implements java.util.concurrent.locks.ReadWriteLock, java.io.Serializable {
          readonly sync: java.util.concurrent.locks.ReentrantReadWriteLock$Sync
          public constructor()
          public constructor(arg0: boolean | java.lang.Boolean)
          public writeLock(): java.util.concurrent.locks.ReentrantReadWriteLock$WriteLock
          public readLock(): java.util.concurrent.locks.ReentrantReadWriteLock$ReadLock
          public isFair(): boolean
          protected getOwner(): java.lang.Thread
          public getReadLockCount(): number
          public isWriteLocked(): boolean
          public isWriteLockedByCurrentThread(): boolean
          public getWriteHoldCount(): number
          public getReadHoldCount(): number
          protected getQueuedWriterThreads(): java.util.Collection<java.lang.Thread>
          protected getQueuedReaderThreads(): java.util.Collection<java.lang.Thread>
          public hasQueuedThreads(): boolean
          public hasQueuedThread(arg0: java.lang.Thread): boolean
          public getQueueLength(): number
          protected getQueuedThreads(): java.util.Collection<java.lang.Thread>
          public hasWaiters(arg0: java.util.concurrent.locks.Condition): boolean
          public getWaitQueueLength(arg0: java.util.concurrent.locks.Condition): number
          protected getWaitingThreads(arg0: java.util.concurrent.locks.Condition): java.util.Collection<java.lang.Thread>
          public toString(): java.lang.String
          public writeLock(): java.util.concurrent.locks.Lock
          public readLock(): java.util.concurrent.locks.Lock
        }

      }
    }
  }
}
