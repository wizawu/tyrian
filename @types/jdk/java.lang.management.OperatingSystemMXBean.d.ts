declare namespace java {
  namespace lang {
    namespace management {
      interface OperatingSystemMXBean extends java.lang.management.PlatformManagedObject {
        getName(): java.lang.String
        getArch(): java.lang.String
        getVersion(): java.lang.String
        getAvailableProcessors(): number
        getSystemLoadAverage(): number
      }
    }
  }
}
