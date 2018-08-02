declare namespace java {
    namespace lang {
        namespace management {
interface MemoryPoolMXBean extends java.lang.management.PlatformManagedObject {
    getCollectionUsage(): java.lang.management.MemoryUsage
    getCollectionUsageThreshold(): long
    getCollectionUsageThresholdCount(): long
    getMemoryManagerNames(): java.lang.String[]
    getName(): string
    getPeakUsage(): java.lang.management.MemoryUsage
    getType(): java.lang.management.MemoryType
    getUsage(): java.lang.management.MemoryUsage
    getUsageThreshold(): long
    getUsageThresholdCount(): long
    isCollectionUsageThresholdExceeded(): boolean
    isCollectionUsageThresholdSupported(): boolean
    isUsageThresholdExceeded(): boolean
    isUsageThresholdSupported(): boolean
    isValid(): boolean
    resetPeakUsage(): void
    setCollectionUsageThreshold(arg0: long): void
    setUsageThreshold(arg0: long): void
}

        }
    }
}