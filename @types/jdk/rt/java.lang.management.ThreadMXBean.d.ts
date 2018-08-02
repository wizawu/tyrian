declare namespace java {
    namespace lang {
        namespace management {
interface ThreadMXBean extends java.lang.management.PlatformManagedObject {
    findMonitorDeadlockedThreads(): long[]
    getAllThreadIds(): long[]
    getCurrentThreadCpuTime(): long
    getCurrentThreadUserTime(): long
    getDaemonThreadCount(): int
    getPeakThreadCount(): int
    getThreadCount(): int
    getThreadCpuTime(arg0: long): long
    getThreadInfo(arg0: long): java.lang.management.ThreadInfo
    getThreadInfo(arg0: long[]): java.lang.management.ThreadInfo[]
    getThreadInfo(arg0: long[], arg1: int): java.lang.management.ThreadInfo[]
    getThreadInfo(arg0: long[], arg1: boolean, arg2: boolean): java.lang.management.ThreadInfo[]
    getThreadInfo(arg0: long, arg1: int): java.lang.management.ThreadInfo
    getThreadUserTime(arg0: long): long
    getTotalStartedThreadCount(): long
    isCurrentThreadCpuTimeSupported(): boolean
    isThreadContentionMonitoringEnabled(): boolean
    isThreadContentionMonitoringSupported(): boolean
    isThreadCpuTimeEnabled(): boolean
    isThreadCpuTimeSupported(): boolean
    resetPeakThreadCount(): void
    setThreadContentionMonitoringEnabled(arg0: boolean): void
    setThreadCpuTimeEnabled(arg0: boolean): void
    isObjectMonitorUsageSupported(): boolean
    isSynchronizerUsageSupported(): boolean
    findDeadlockedThreads(): long[]
    dumpAllThreads(arg0: boolean, arg1: boolean): java.lang.management.ThreadInfo[]
}

        }
    }
}