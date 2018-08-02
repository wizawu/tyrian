declare namespace com {
    namespace sun {
        namespace management {
interface OperatingSystemMXBean extends java.lang.management.OperatingSystemMXBean {
    getCommittedVirtualMemorySize(): long
    getTotalSwapSpaceSize(): long
    getFreeSwapSpaceSize(): long
    getProcessCpuTime(): long
    getFreePhysicalMemorySize(): long
    getTotalPhysicalMemorySize(): long
    getSystemCpuLoad(): double
    getProcessCpuLoad(): double
}

        }
    }
}