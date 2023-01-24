declare namespace java {
  namespace lang {
    namespace management {
      interface BufferPoolMXBean extends java.lang.management.PlatformManagedObject {
        getName(): java.lang.String
        getCount(): number
        getTotalCapacity(): number
        getMemoryUsed(): number
      }
    }
  }
}
