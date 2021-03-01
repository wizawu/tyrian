declare namespace java {
  namespace lang {
    namespace management {

      interface BufferPoolMXBean extends java.lang.management.PlatformManagedObject {

        getName(): java.lang.String
        getCount(): long
        getTotalCapacity(): long
        getMemoryUsed(): long
      }

    }
  }
}
