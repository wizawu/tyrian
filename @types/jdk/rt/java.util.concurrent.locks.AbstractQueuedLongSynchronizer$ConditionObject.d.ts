declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                class AbstractQueuedLongSynchronizer$ConditionObject implements java.util.concurrent.locks.Condition , java.io.Serializable {
                    public constructor(arg0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer)
                    public signal(): void
                    public signalAll(): void
                    public awaitUninterruptibly(): void
                    public await(): void
                    public awaitNanos(arg0: long): long
                    public awaitUntil(arg0: java.util.Date): boolean
                    public await(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                    protected hasWaiters(): boolean
                    protected getWaitQueueLength(): int
                    protected getWaitingThreads(): java.util.Collection<java.lang.Thread>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}