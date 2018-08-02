declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                namespace internal {
class JvmCpuMonitor implements com.ibm.lang.management.JvmCpuMonitorMXBean {
    public constructor()
    public static getInstance(): com.ibm.lang.management.internal.JvmCpuMonitor
    public getObjectName(): javax.management.ObjectName
    public getThreadsCpuUsage(arg0: com.ibm.lang.management.JvmCpuMonitorInfo): com.ibm.lang.management.JvmCpuMonitorInfo
    public getThreadsCpuUsage(): com.ibm.lang.management.JvmCpuMonitorInfo
    public setThreadCategory(arg0: long, arg1: java.lang.String | string): int
    public getThreadCategory(arg0: long): string
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}