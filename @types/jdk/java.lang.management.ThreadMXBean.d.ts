declare namespace java {
  namespace lang {
    namespace management {

      interface ThreadMXBean extends java.lang.management.PlatformManagedObject {
        getThreadCount(): number
        getPeakThreadCount(): number
        getTotalStartedThreadCount(): number
        getDaemonThreadCount(): number
        getAllThreadIds(): number[]
        getThreadInfo(arg0: number | java.lang.Long): java.lang.management.ThreadInfo
        getThreadInfo(arg0: number[] | java.lang.Long[]): java.lang.management.ThreadInfo[]
        getThreadInfo(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.lang.management.ThreadInfo
        getThreadInfo(arg0: number[] | java.lang.Long[], arg1: number | java.lang.Integer): java.lang.management.ThreadInfo[]
        isThreadContentionMonitoringSupported(): boolean
        isThreadContentionMonitoringEnabled(): boolean
        setThreadContentionMonitoringEnabled(arg0: boolean | java.lang.Boolean): void
        getCurrentThreadCpuTime(): number
        getCurrentThreadUserTime(): number
        getThreadCpuTime(arg0: number | java.lang.Long): number
        getThreadUserTime(arg0: number | java.lang.Long): number
        isThreadCpuTimeSupported(): boolean
        isCurrentThreadCpuTimeSupported(): boolean
        isThreadCpuTimeEnabled(): boolean
        setThreadCpuTimeEnabled(arg0: boolean | java.lang.Boolean): void
        findMonitorDeadlockedThreads(): number[]
        resetPeakThreadCount(): void
        findDeadlockedThreads(): number[]
        isObjectMonitorUsageSupported(): boolean
        isSynchronizerUsageSupported(): boolean
        getThreadInfo(arg0: number[] | java.lang.Long[], arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): java.lang.management.ThreadInfo[]
        getThreadInfo(arg0: number[] | java.lang.Long[], arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer): java.lang.management.ThreadInfo[]
        dumpAllThreads(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): java.lang.management.ThreadInfo[]
        dumpAllThreads(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean, arg2: number | java.lang.Integer): java.lang.management.ThreadInfo[]
      }

    }
  }
}
