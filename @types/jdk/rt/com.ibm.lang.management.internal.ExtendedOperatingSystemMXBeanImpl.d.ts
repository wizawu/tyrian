declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                namespace internal {
class ExtendedOperatingSystemMXBeanImpl extends com.ibm.java.lang.management.internal.OperatingSystemMXBeanImpl implements com.ibm.lang.management.OperatingSystemMXBean {
    public static getInstance(): com.ibm.lang.management.internal.ExtendedOperatingSystemMXBeanImpl
    public getFreePhysicalMemorySize(): long
    public getFreeSwapSpaceSize(): long
    public getHardwareModel(): string
    public getProcessCpuLoad(): double
    public getProcessCpuTime(): long
    public getProcessCpuTimeByNS(): long
    public getProcessingCapacity(): int
    public getProcessPhysicalMemorySize(): long
    public getProcessPrivateMemorySize(): long
    public getCommittedVirtualMemorySize(): long
    public getProcessVirtualMemorySize(): long
    public getSystemCpuLoad(): double
    public getTotalPhysicalMemorySize(): long
    public getTotalPhysicalMemory(): long
    public getTotalSwapSpaceSize(): long
    public isHardwareEmulated(): boolean
    public retrieveMemoryUsage(): com.ibm.lang.management.MemoryUsage
    public retrieveMemoryUsage(arg0: com.ibm.lang.management.MemoryUsage): com.ibm.lang.management.MemoryUsage
    public retrieveProcessorUsage(): com.ibm.lang.management.ProcessorUsage[]
    public retrieveProcessorUsage(arg0: com.ibm.lang.management.ProcessorUsage[]): com.ibm.lang.management.ProcessorUsage[]
    public retrieveTotalProcessorUsage(): com.ibm.lang.management.ProcessorUsage
    public retrieveTotalProcessorUsage(arg0: com.ibm.lang.management.ProcessorUsage): com.ibm.lang.management.ProcessorUsage
    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}