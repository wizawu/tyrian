declare namespace java {
  namespace lang {
    namespace management {

      interface RuntimeMXBean extends java.lang.management.PlatformManagedObject {
        getPid(): long
        getName(): java.lang.String
        getVmName(): java.lang.String
        getVmVendor(): java.lang.String
        getVmVersion(): java.lang.String
        getSpecName(): java.lang.String
        getSpecVendor(): java.lang.String
        getSpecVersion(): java.lang.String
        getManagementSpecVersion(): java.lang.String
        getClassPath(): java.lang.String
        getLibraryPath(): java.lang.String
        isBootClassPathSupported(): boolean
        getBootClassPath(): java.lang.String
        getInputArguments(): java.util.List<java.lang.String>
        getUptime(): long
        getStartTime(): long
        getSystemProperties(): java.util.Map<java.lang.String,java.lang.String>
      }

    }
  }
}
