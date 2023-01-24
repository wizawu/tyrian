declare namespace java {
  namespace lang {
    namespace management {
      interface MemoryMXBean extends java.lang.management.PlatformManagedObject {
        getObjectPendingFinalizationCount(): number
        getHeapMemoryUsage(): java.lang.management.MemoryUsage
        getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
        isVerbose(): boolean
        setVerbose(arg0: boolean | java.lang.Boolean): void
        gc(): void
      }
    }
  }
}
