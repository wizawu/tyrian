declare namespace java {
    namespace util {
        namespace concurrent {
class ThreadPoolExecutor$Worker extends java.util.concurrent.locks.AbstractQueuedSynchronizer implements java.lang.Runnable {
    public run(): void
    protected isHeldExclusively(): boolean
    protected tryAcquire(arg0: int): boolean
    protected tryRelease(arg0: int): boolean
    public lock(): void
    public tryLock(): boolean
    public unlock(): void
    public isLocked(): boolean
    public static class: java.lang.Class<any>
}

class ThreadPoolExecutor$Worker$$Lambda extends java.util.concurrent.locks.AbstractQueuedSynchronizer implements java.lang.Runnable {
    public (): void
}

        }
    }
}