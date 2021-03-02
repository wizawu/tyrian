declare namespace java {
  namespace lang {
    namespace management {

      interface MemoryMXBean extends java.lang.management.PlatformManagedObject {
        getObjectPendingFinalizationCount(): int
        getHeapMemoryUsage(): java.lang.management.MemoryUsage
        getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
        isVerbose(): boolean
        setVerbose(arg0: boolean): void
        gc(): void
      }

    }
  }
}
