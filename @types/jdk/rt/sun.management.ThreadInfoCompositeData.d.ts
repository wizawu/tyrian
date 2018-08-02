declare namespace sun {
    namespace management {
        class ThreadInfoCompositeData extends sun.management.LazyCompositeData {
            public getThreadInfo(): java.lang.management.ThreadInfo
            public isCurrentVersion(): boolean
            public static getInstance(arg0: javax.management.openmbean.CompositeData): sun.management.ThreadInfoCompositeData
            public static toCompositeData(arg0: java.lang.management.ThreadInfo): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static isCurrentVersion(arg0: javax.management.openmbean.CompositeData): boolean
            public threadId(): long
            public threadName(): string
            public threadState(): java.lang.Thread$State
            public blockedTime(): long
            public blockedCount(): long
            public waitedTime(): long
            public waitedCount(): long
            public lockName(): string
            public lockOwnerId(): long
            public lockOwnerName(): string
            public suspended(): boolean
            public inNative(): boolean
            public stackTrace(): java.lang.StackTraceElement[]
            public lockInfo(): java.lang.management.LockInfo
            public lockedMonitors(): java.lang.management.MonitorInfo[]
            public lockedSynchronizers(): java.lang.management.LockInfo[]
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
    }
}