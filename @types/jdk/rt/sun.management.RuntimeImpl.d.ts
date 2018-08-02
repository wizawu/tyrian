declare namespace sun {
    namespace management {
class RuntimeImpl implements java.lang.management.RuntimeMXBean {
    public getName(): string
    public getManagementSpecVersion(): string
    public getVmName(): string
    public getVmVendor(): string
    public getVmVersion(): string
    public getSpecName(): string
    public getSpecVendor(): string
    public getSpecVersion(): string
    public getClassPath(): string
    public getLibraryPath(): string
    public getBootClassPath(): string
    public getInputArguments(): java.util.List<java.lang.String>
    public getUptime(): long
    public getStartTime(): long
    public isBootClassPathSupported(): boolean
    public getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
    public getObjectName(): javax.management.ObjectName
    public static class: java.lang.Class<any>
}

    }
}