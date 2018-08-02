declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                class StampedLock implements java.io.Serializable {
                    public constructor()
                    public writeLock(): long
                    public tryWriteLock(): long
                    public tryWriteLock(arg0: long, arg1: java.util.concurrent.TimeUnit): long
                    public writeLockInterruptibly(): long
                    public readLock(): long
                    public tryReadLock(): long
                    public tryReadLock(arg0: long, arg1: java.util.concurrent.TimeUnit): long
                    public readLockInterruptibly(): long
                    public tryOptimisticRead(): long
                    public validate(arg0: long): boolean
                    public unlockWrite(arg0: long): void
                    public unlockRead(arg0: long): void
                    public unlock(arg0: long): void
                    public tryConvertToWriteLock(arg0: long): long
                    public tryConvertToReadLock(arg0: long): long
                    public tryConvertToOptimisticRead(arg0: long): long
                    public tryUnlockWrite(): boolean
                    public tryUnlockRead(): boolean
                    public isWriteLocked(): boolean
                    public isReadLocked(): boolean
                    public getReadLockCount(): int
                    public toString(): string
                    public asReadLock(): java.util.concurrent.locks.Lock
                    public asWriteLock(): java.util.concurrent.locks.Lock
                    public asReadWriteLock(): java.util.concurrent.locks.ReadWriteLock
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}