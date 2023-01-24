declare namespace java {
  namespace lang {
    namespace management {
      interface MemoryPoolMXBean extends java.lang.management.PlatformManagedObject {
        getName(): java.lang.String
        getType(): java.lang.management.MemoryType
        getUsage(): java.lang.management.MemoryUsage
        getPeakUsage(): java.lang.management.MemoryUsage
        resetPeakUsage(): void
        isValid(): boolean
        getMemoryManagerNames(): java.lang.String[]
        getUsageThreshold(): number
        setUsageThreshold(arg0: number | java.lang.Long): void
        isUsageThresholdExceeded(): boolean
        getUsageThresholdCount(): number
        isUsageThresholdSupported(): boolean
        getCollectionUsageThreshold(): number
        setCollectionUsageThreshold(arg0: number | java.lang.Long): void
        isCollectionUsageThresholdExceeded(): boolean
        getCollectionUsageThresholdCount(): number
        getCollectionUsage(): java.lang.management.MemoryUsage
        isCollectionUsageThresholdSupported(): boolean
      }
    }
  }
}
