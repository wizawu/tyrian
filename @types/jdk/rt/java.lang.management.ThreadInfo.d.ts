declare namespace java {
    namespace lang {
        namespace management {
class ThreadInfo {
    public getBlockedCount(): long
    public getBlockedTime(): long
    public getLockName(): string
    public getLockOwnerId(): long
    public getLockOwnerName(): string
    public getLockInfo(): java.lang.management.LockInfo
    public getStackTrace(): java.lang.StackTraceElement[]
    public getThreadId(): long
    public getThreadName(): string
    public getThreadState(): java.lang.Thread$State
    public getWaitedCount(): long
    public getWaitedTime(): long
    public isInNative(): boolean
    public isSuspended(): boolean
    public getLockedMonitors(): java.lang.management.MonitorInfo[]
    public getLockedSynchronizers(): java.lang.management.LockInfo[]
    public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.ThreadInfo
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}