declare namespace java {
    namespace lang {
        namespace management {
            interface ThreadMXBean extends java.lang.management.PlatformManagedObject {
                getThreadCount(): int
                getPeakThreadCount(): int
                getTotalStartedThreadCount(): long
                getDaemonThreadCount(): int
                getAllThreadIds(): long[]
                getThreadInfo(arg0: long): java.lang.management.ThreadInfo
                getThreadInfo(arg0: long[]): java.lang.management.ThreadInfo[]
                getThreadInfo(arg0: long, arg1: int): java.lang.management.ThreadInfo
                getThreadInfo(arg0: long[], arg1: int): java.lang.management.ThreadInfo[]
                isThreadContentionMonitoringSupported(): boolean
                isThreadContentionMonitoringEnabled(): boolean
                setThreadContentionMonitoringEnabled(arg0: boolean): void
                getCurrentThreadCpuTime(): long
                getCurrentThreadUserTime(): long
                getThreadCpuTime(arg0: long): long
                getThreadUserTime(arg0: long): long
                isThreadCpuTimeSupported(): boolean
                isCurrentThreadCpuTimeSupported(): boolean
                isThreadCpuTimeEnabled(): boolean
                setThreadCpuTimeEnabled(arg0: boolean): void
                findMonitorDeadlockedThreads(): long[]
                resetPeakThreadCount(): void
                findDeadlockedThreads(): long[]
                isObjectMonitorUsageSupported(): boolean
                isSynchronizerUsageSupported(): boolean
                getThreadInfo(arg0: long[], arg1: boolean, arg2: boolean): java.lang.management.ThreadInfo[]
                dumpAllThreads(arg0: boolean, arg1: boolean): java.lang.management.ThreadInfo[]
            }
        }
    }
}