declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
interface JvmCpuMonitorMXBean extends java.lang.management.PlatformManagedObject {
    getThreadsCpuUsage(arg0: com.ibm.lang.management.JvmCpuMonitorInfo): com.ibm.lang.management.JvmCpuMonitorInfo
    getThreadsCpuUsage(): com.ibm.lang.management.JvmCpuMonitorInfo
    setThreadCategory(arg0: long, arg1: java.lang.String | string): int
    getThreadCategory(arg0: long): string
}

            }
        }
    }
}