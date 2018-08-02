declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                class ReentrantReadWriteLock$WriteLock implements java.util.concurrent.locks.Lock , java.io.Serializable {
                    protected constructor(arg0: java.util.concurrent.locks.ReentrantReadWriteLock)
                    public lock(): void
                    public lockInterruptibly(): void
                    public tryLock(): boolean
                    public tryLock(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                    public unlock(): void
                    public newCondition(): java.util.concurrent.locks.Condition
                    public toString(): string
                    public isHeldByCurrentThread(): boolean
                    public getHoldCount(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}