declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        abstract class AbstractQueuedLongSynchronizer extends java.util.concurrent.locks.AbstractOwnableSynchronizer implements java.io.Serializable {

          static readonly SPIN_FOR_TIMEOUT_THRESHOLD: long
          protected constructor()
          protected readonly getState(): long
          protected readonly setState(arg0: long): void
          protected readonly compareAndSetState(arg0: long, arg1: long): boolean
          static selfInterrupt(): void
          readonly acquireQueued(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node, arg1: long): boolean
          protected tryAcquire(arg0: long): boolean
          protected tryRelease(arg0: long): boolean
          protected tryAcquireShared(arg0: long): long
          protected tryReleaseShared(arg0: long): boolean
          protected isHeldExclusively(): boolean
          public readonly acquire(arg0: long): void
          public readonly acquireInterruptibly(arg0: long): void
          public readonly tryAcquireNanos(arg0: long, arg1: long): boolean
          public readonly release(arg0: long): boolean
          public readonly acquireShared(arg0: long): void
          public readonly acquireSharedInterruptibly(arg0: long): void
          public readonly tryAcquireSharedNanos(arg0: long, arg1: long): boolean
          public readonly releaseShared(arg0: long): boolean
          public readonly hasQueuedThreads(): boolean
          public readonly hasContended(): boolean
          public readonly getFirstQueuedThread(): java.lang.Thread
          public readonly isQueued(arg0: java.lang.Thread): boolean
          readonly apparentlyFirstQueuedIsExclusive(): boolean
          public readonly hasQueuedPredecessors(): boolean
          public readonly getQueueLength(): int
          public readonly getQueuedThreads(): java.util.Collection<java.lang.Thread>
          public readonly getExclusiveQueuedThreads(): java.util.Collection<java.lang.Thread>
          public readonly getSharedQueuedThreads(): java.util.Collection<java.lang.Thread>
          public toString(): java.lang.String
          readonly isOnSyncQueue(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          readonly transferForSignal(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          readonly transferAfterCancelledWait(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          readonly fullyRelease(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): long
          public readonly owns(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): boolean
          public readonly hasWaiters(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): boolean
          public readonly getWaitQueueLength(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): int
          public readonly getWaitingThreads(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): java.util.Collection<java.lang.Thread>
        }

      }
    }
  }
}
