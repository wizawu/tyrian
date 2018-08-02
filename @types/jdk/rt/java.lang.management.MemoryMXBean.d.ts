declare namespace java {
    namespace lang {
        namespace management {
            interface MemoryMXBean extends java.lang.management.PlatformManagedObject {
                gc(): void
                getHeapMemoryUsage(): java.lang.management.MemoryUsage
                getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
                getObjectPendingFinalizationCount(): int
                isVerbose(): boolean
                setVerbose(arg0: boolean): void
            }
        }
    }
}