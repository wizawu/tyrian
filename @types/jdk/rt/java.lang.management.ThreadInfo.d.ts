declare namespace java {
    namespace lang {
        namespace management {
            class ThreadInfo {
                public getThreadId(): long
                public getThreadName(): string
                public getThreadState(): java.lang.Thread$State
                public getBlockedTime(): long
                public getBlockedCount(): long
                public getWaitedTime(): long
                public getWaitedCount(): long
                public getLockInfo(): java.lang.management.LockInfo
                public getLockName(): string
                public getLockOwnerId(): long
                public getLockOwnerName(): string
                public getStackTrace(): java.lang.StackTraceElement[]
                public isSuspended(): boolean
                public isInNative(): boolean
                public toString(): string
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.ThreadInfo
                public getLockedMonitors(): java.lang.management.MonitorInfo[]
                public getLockedSynchronizers(): java.lang.management.LockInfo[]
                public static class: java.lang.Class<any>
            }
        }
    }
}