declare namespace java {
    namespace lang {
        namespace management {
interface RuntimeMXBean extends java.lang.management.PlatformManagedObject {
    getBootClassPath(): string
    getClassPath(): string
    getInputArguments(): java.util.List<java.lang.String>
    getLibraryPath(): string
    getManagementSpecVersion(): string
    getName(): string
    getSpecName(): string
    getSpecVendor(): string
    getSpecVersion(): string
    getStartTime(): long
    getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
    getUptime(): long
    getVmName(): string
    getVmVendor(): string
    getVmVersion(): string
    isBootClassPathSupported(): boolean
}

        }
    }
}