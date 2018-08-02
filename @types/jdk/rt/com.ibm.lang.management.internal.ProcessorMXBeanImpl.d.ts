declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                namespace internal {
class ProcessorMXBeanImpl implements com.ibm.lang.management.ProcessorMXBean {
    public static getInstance(): com.ibm.lang.management.ProcessorMXBean
    public getObjectName(): javax.management.ObjectName
    public getNumberPhysicalCPUs(): int
    public getNumberOnlineCPUs(): int
    public getNumberBoundCPUs(): int
    public getNumberEntitledCPUs(): int
    public getNumberTargetCPUs(): int
    public setNumberEntitledCPUs(arg0: int): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}