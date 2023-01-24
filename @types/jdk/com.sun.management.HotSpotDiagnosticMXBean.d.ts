declare namespace com {
  namespace sun {
    namespace management {
      interface HotSpotDiagnosticMXBean extends java.lang.management.PlatformManagedObject {
        dumpHeap(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
        getDiagnosticOptions(): java.util.List<com.sun.management.VMOption>
        getVMOption(arg0: java.lang.String | string): com.sun.management.VMOption
        setVMOption(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      }
    }
  }
}
