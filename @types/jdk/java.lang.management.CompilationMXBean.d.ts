declare namespace java {
  namespace lang {
    namespace management {

      interface CompilationMXBean extends java.lang.management.PlatformManagedObject {

        getName(): java.lang.String
        isCompilationTimeMonitoringSupported(): boolean
        getTotalCompilationTime(): long
      }

    }
  }
}
