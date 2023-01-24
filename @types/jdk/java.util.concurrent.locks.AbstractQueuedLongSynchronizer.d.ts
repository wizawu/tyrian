declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {
        abstract class AbstractQueuedLongSynchronizer
          extends java.util.concurrent.locks.AbstractOwnableSynchronizer
          implements java.io.Serializable
        {
          static readonly SPIN_FOR_TIMEOUT_THRESHOLD: long
          protected constructor()
          protected getState(): number
          protected setState(arg0: number | java.lang.Long): void
          protected compareAndSetState(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          static selfInterrupt(): void
          acquireQueued(
            arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node,
            arg1: number | java.lang.Long
          ): boolean
          protected tryAcquire(arg0: number | java.lang.Long): boolean
          protected tryRelease(arg0: number | java.lang.Long): boolean
          protected tryAcquireShared(arg0: number | java.lang.Long): number
          protected tryReleaseShared(arg0: number | java.lang.Long): boolean
          protected isHeldExclusively(): boolean
          public acquire(arg0: number | java.lang.Long): void
          public acquireInterruptibly(arg0: number | java.lang.Long): void
          public tryAcquireNanos(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public release(arg0: number | java.lang.Long): boolean
          public acquireShared(arg0: number | java.lang.Long): void
          public acquireSharedInterruptibly(arg0: number | java.lang.Long): void
          public tryAcquireSharedNanos(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public releaseShared(arg0: number | java.lang.Long): boolean
          public hasQueuedThreads(): boolean
          public hasContended(): boolean
          public getFirstQueuedThread(): java.lang.Thread
          public isQueued(arg0: java.lang.Thread): boolean
          apparentlyFirstQueuedIsExclusive(): boolean
          public hasQueuedPredecessors(): boolean
          public getQueueLength(): number
          public getQueuedThreads(): java.util.Collection<java.lang.Thread>
          public getExclusiveQueuedThreads(): java.util.Collection<java.lang.Thread>
          public getSharedQueuedThreads(): java.util.Collection<java.lang.Thread>
          public toString(): java.lang.String
          isOnSyncQueue(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          transferForSignal(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          transferAfterCancelledWait(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          fullyRelease(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): number
          public owns(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): boolean
          public hasWaiters(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): boolean
          public getWaitQueueLength(
            arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject
          ): number
          public getWaitingThreads(
            arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject
          ): java.util.Collection<java.lang.Thread>
        }
      }
    }
  }
}
