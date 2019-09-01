declare namespace java {
    namespace lang {
        namespace management {
            interface RuntimeMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                getVmName(): string
                getVmVendor(): string
                getVmVersion(): string
                getSpecName(): string
                getSpecVendor(): string
                getSpecVersion(): string
                getManagementSpecVersion(): string
                getClassPath(): string
                getLibraryPath(): string
                isBootClassPathSupported(): boolean
                getBootClassPath(): string
                getInputArguments(): java.util.List<java.lang.String>
                getUptime(): long
                getStartTime(): long
                getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
            }
        }
    }
}