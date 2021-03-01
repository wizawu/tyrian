declare namespace com {
  namespace sun {
    namespace management {

      interface HotSpotDiagnosticMXBean extends java.lang.management.PlatformManagedObject {

        dumpHeap(arg0: java.lang.String, arg1: boolean): void
        getDiagnosticOptions(): java.util.List<com.sun.management.VMOption>
        getVMOption(arg0: java.lang.String): com.sun.management.VMOption
        setVMOption(arg0: java.lang.String, arg1: java.lang.String): void
      }

    }
  }
}
