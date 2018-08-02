declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                interface OperatingSystemMXBean extends com.sun.management.OperatingSystemMXBean {
                    getTotalPhysicalMemorySize(): long
                    getTotalPhysicalMemory(): long
                    getProcessingCapacity(): int
                    getProcessCpuTime(): long
                    getProcessCpuTimeByNS(): long
                    getSystemCpuLoad(): double
                    getFreePhysicalMemorySize(): long
                    getCommittedVirtualMemorySize(): long
                    getProcessVirtualMemorySize(): long
                    getProcessPrivateMemorySize(): long
                    getProcessPhysicalMemorySize(): long
                    getTotalSwapSpaceSize(): long
                    getFreeSwapSpaceSize(): long
                    getProcessCpuLoad(): double
                    retrieveTotalProcessorUsage(arg0: com.ibm.lang.management.ProcessorUsage): com.ibm.lang.management.ProcessorUsage
                    retrieveTotalProcessorUsage(): com.ibm.lang.management.ProcessorUsage
                    retrieveProcessorUsage(arg0: com.ibm.lang.management.ProcessorUsage[]): com.ibm.lang.management.ProcessorUsage[]
                    retrieveProcessorUsage(): com.ibm.lang.management.ProcessorUsage[]
                    retrieveMemoryUsage(arg0: com.ibm.lang.management.MemoryUsage): com.ibm.lang.management.MemoryUsage
                    retrieveMemoryUsage(): com.ibm.lang.management.MemoryUsage
                    getHardwareModel(): string
                    isHardwareEmulated(): boolean
                }
            }
        }
    }
}