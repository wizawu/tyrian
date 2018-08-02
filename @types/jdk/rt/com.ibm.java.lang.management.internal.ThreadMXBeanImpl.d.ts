declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
class ThreadMXBeanImpl implements java.lang.management.ThreadMXBean {
    protected constructor()
    public static getInstance(): java.lang.management.ThreadMXBean
    public findMonitorDeadlockedThreads(): long[]
    public getAllThreadIds(): long[]
    public getCurrentThreadCpuTime(): long
    public getCurrentThreadUserTime(): long
    public getDaemonThreadCount(): int
    public getPeakThreadCount(): int
    public getThreadCount(): int
    public getThreadCpuTime(arg0: long): long
    public getThreadInfo(arg0: long): java.lang.management.ThreadInfo
    public getThreadInfo(arg0: long[]): java.lang.management.ThreadInfo[]
    public getThreadInfo(arg0: long[], arg1: int): java.lang.management.ThreadInfo[]
    public getThreadInfo(arg0: long[], arg1: boolean, arg2: boolean): java.lang.management.ThreadInfo[]
    public getThreadInfo(arg0: long, arg1: int): java.lang.management.ThreadInfo
    public getThreadUserTime(arg0: long): long
    public getTotalStartedThreadCount(): long
    public isCurrentThreadCpuTimeSupported(): boolean
    public isThreadContentionMonitoringEnabled(): boolean
    public isThreadContentionMonitoringSupported(): boolean
    public isThreadCpuTimeEnabled(): boolean
    public isThreadCpuTimeSupported(): boolean
    public resetPeakThreadCount(): void
    public setThreadContentionMonitoringEnabled(arg0: boolean): void
    public setThreadCpuTimeEnabled(arg0: boolean): void
    public isObjectMonitorUsageSupported(): boolean
    public isSynchronizerUsageSupported(): boolean
    public findDeadlockedThreads(): long[]
    public dumpAllThreads(arg0: boolean, arg1: boolean): java.lang.management.ThreadInfo[]
    public getNativeThreadIds(arg0: long[]): long[]
    public getNativeThreadId(arg0: long): long
    public getObjectName(): javax.management.ObjectName
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}