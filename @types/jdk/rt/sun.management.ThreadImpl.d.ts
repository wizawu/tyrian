declare namespace sun {
    namespace management {
        class ThreadImpl implements com.sun.management.ThreadMXBean {
            public getThreadCount(): int
            public getPeakThreadCount(): int
            public getTotalStartedThreadCount(): long
            public getDaemonThreadCount(): int
            public isThreadContentionMonitoringSupported(): boolean
            public isThreadContentionMonitoringEnabled(): boolean
            public isThreadCpuTimeSupported(): boolean
            public isCurrentThreadCpuTimeSupported(): boolean
            public isThreadAllocatedMemorySupported(): boolean
            public isThreadCpuTimeEnabled(): boolean
            public isThreadAllocatedMemoryEnabled(): boolean
            public getAllThreadIds(): long[]
            public getThreadInfo(arg0: long): java.lang.management.ThreadInfo
            public getThreadInfo(arg0: long, arg1: int): java.lang.management.ThreadInfo
            public getThreadInfo(arg0: long[]): java.lang.management.ThreadInfo[]
            public getThreadInfo(arg0: long[], arg1: int): java.lang.management.ThreadInfo[]
            public setThreadContentionMonitoringEnabled(arg0: boolean): void
            public getCurrentThreadCpuTime(): long
            public getThreadCpuTime(arg0: long): long
            public getThreadCpuTime(arg0: long[]): long[]
            public getCurrentThreadUserTime(): long
            public getThreadUserTime(arg0: long): long
            public getThreadUserTime(arg0: long[]): long[]
            public setThreadCpuTimeEnabled(arg0: boolean): void
            public getThreadAllocatedBytes(arg0: long): long
            public getThreadAllocatedBytes(arg0: long[]): long[]
            public setThreadAllocatedMemoryEnabled(arg0: boolean): void
            public findMonitorDeadlockedThreads(): long[]
            public findDeadlockedThreads(): long[]
            public resetPeakThreadCount(): void
            public isObjectMonitorUsageSupported(): boolean
            public isSynchronizerUsageSupported(): boolean
            public getThreadInfo(arg0: long[], arg1: boolean, arg2: boolean): java.lang.management.ThreadInfo[]
            public dumpAllThreads(arg0: boolean, arg1: boolean): java.lang.management.ThreadInfo[]
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}