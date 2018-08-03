declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                abstract class AbstractQueuedLongSynchronizer extends java.util.concurrent.locks.AbstractOwnableSynchronizer implements java.io.Serializable {
                    protected constructor()
                    protected getState(): long
                    protected setState(arg0: long): void
                    protected compareAndSetState(arg0: long, arg1: long): boolean
                    protected tryAcquire(arg0: long): boolean
                    protected tryRelease(arg0: long): boolean
                    protected tryAcquireShared(arg0: long): long
                    protected tryReleaseShared(arg0: long): boolean
                    protected isHeldExclusively(): boolean
                    public acquire(arg0: long): void
                    public acquireInterruptibly(arg0: long): void
                    public tryAcquireNanos(arg0: long, arg1: long): boolean
                    public release(arg0: long): boolean
                    public acquireShared(arg0: long): void
                    public acquireSharedInterruptibly(arg0: long): void
                    public tryAcquireSharedNanos(arg0: long, arg1: long): boolean
                    public releaseShared(arg0: long): boolean
                    public hasQueuedThreads(): boolean
                    public hasContended(): boolean
                    public getFirstQueuedThread(): java.lang.Thread
                    public isQueued(arg0: java.lang.Thread): boolean
                    public hasQueuedPredecessors(): boolean
                    public getQueueLength(): int
                    public getQueuedThreads(): java.util.Collection<java.lang.Thread>
                    public getExclusiveQueuedThreads(): java.util.Collection<java.lang.Thread>
                    public getSharedQueuedThreads(): java.util.Collection<java.lang.Thread>
                    public toString(): string
                    public owns(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): boolean
                    public hasWaiters(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): boolean
                    public getWaitQueueLength(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): int
                    public getWaitingThreads(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer$ConditionObject): java.util.Collection<java.lang.Thread>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}