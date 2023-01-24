declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {
        abstract class AbstractQueuedSynchronizer
          extends java.util.concurrent.locks.AbstractOwnableSynchronizer
          implements java.io.Serializable
        {
          static readonly SPIN_FOR_TIMEOUT_THRESHOLD: long
          protected constructor()
          protected getState(): number
          protected setState(arg0: number | java.lang.Integer): void
          protected compareAndSetState(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
          static selfInterrupt(): void
          acquireQueued(
            arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node,
            arg1: number | java.lang.Integer
          ): boolean
          protected tryAcquire(arg0: number | java.lang.Integer): boolean
          protected tryRelease(arg0: number | java.lang.Integer): boolean
          protected tryAcquireShared(arg0: number | java.lang.Integer): number
          protected tryReleaseShared(arg0: number | java.lang.Integer): boolean
          protected isHeldExclusively(): boolean
          public acquire(arg0: number | java.lang.Integer): void
          public acquireInterruptibly(arg0: number | java.lang.Integer): void
          public tryAcquireNanos(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): boolean
          public release(arg0: number | java.lang.Integer): boolean
          public acquireShared(arg0: number | java.lang.Integer): void
          public acquireSharedInterruptibly(arg0: number | java.lang.Integer): void
          public tryAcquireSharedNanos(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): boolean
          public releaseShared(arg0: number | java.lang.Integer): boolean
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
          public owns(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): boolean
          public hasWaiters(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): boolean
          public getWaitQueueLength(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): number
          public getWaitingThreads(
            arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
          ): java.util.Collection<java.lang.Thread>
        }
      }
    }
  }
}
