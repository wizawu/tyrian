declare namespace java {
  namespace lang {
    namespace management {
      interface GarbageCollectorMXBean extends java.lang.management.MemoryManagerMXBean {
        getCollectionCount(): number
        getCollectionTime(): number
      }
    }
  }
}
