declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
interface ProcessorMXBean extends java.lang.management.PlatformManagedObject {
    getNumberPhysicalCPUs(): int
    getNumberOnlineCPUs(): int
    getNumberBoundCPUs(): int
    getNumberEntitledCPUs(): int
    getNumberTargetCPUs(): int
    setNumberEntitledCPUs(arg0: int): void
}

            }
        }
    }
}