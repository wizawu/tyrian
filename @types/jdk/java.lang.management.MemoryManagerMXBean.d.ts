declare namespace java {
  namespace lang {
    namespace management {

      interface MemoryManagerMXBean extends java.lang.management.PlatformManagedObject {

        getName(): java.lang.String
        isValid(): boolean
        getMemoryPoolNames(): java.lang.String[]
      }

    }
  }
}
