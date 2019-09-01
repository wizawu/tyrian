declare namespace java {
    namespace lang {
        namespace management {
            interface MemoryPoolMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                getType(): java.lang.management.MemoryType
                getUsage(): java.lang.management.MemoryUsage
                getPeakUsage(): java.lang.management.MemoryUsage
                resetPeakUsage(): void
                isValid(): boolean
                getMemoryManagerNames(): java.lang.String[]
                getUsageThreshold(): long
                setUsageThreshold(arg0: long): void
                isUsageThresholdExceeded(): boolean
                getUsageThresholdCount(): long
                isUsageThresholdSupported(): boolean
                getCollectionUsageThreshold(): long
                setCollectionUsageThreshold(arg0: long): void
                isCollectionUsageThresholdExceeded(): boolean
                getCollectionUsageThresholdCount(): long
                getCollectionUsage(): java.lang.management.MemoryUsage
                isCollectionUsageThresholdSupported(): boolean
            }
        }
    }
}