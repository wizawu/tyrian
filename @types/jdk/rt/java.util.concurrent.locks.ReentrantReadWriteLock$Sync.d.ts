declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                abstract class ReentrantReadWriteLock$Sync extends java.util.concurrent.locks.AbstractQueuedSynchronizer {
                    protected tryRelease(arg0: int): boolean
                    protected tryAcquire(arg0: int): boolean
                    protected tryReleaseShared(arg0: int): boolean
                    protected tryAcquireShared(arg0: int): int
                    protected isHeldExclusively(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}