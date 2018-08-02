declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
class RuntimeMXBeanImpl implements java.lang.management.RuntimeMXBean {
    protected constructor()
    public static getInstance(): java.lang.management.RuntimeMXBean
    public getBootClassPath(): string
    public getClassPath(): string
    public getLibraryPath(): string
    public getManagementSpecVersion(): string
    public getName(): string
    public getSpecName(): string
    public getSpecVendor(): string
    public getSpecVersion(): string
    public getStartTime(): long
    public getUptime(): long
    public getVmName(): string
    public getVmVendor(): string
    public getVmVersion(): string
    public isBootClassPathSupported(): boolean
    public getInputArguments(): java.util.List<java.lang.String>
    public getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
    public getObjectName(): javax.management.ObjectName
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}