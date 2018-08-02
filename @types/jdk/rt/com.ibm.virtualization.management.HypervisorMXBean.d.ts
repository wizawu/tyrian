declare namespace com {
    namespace ibm {
        namespace virtualization {
            namespace management {
interface HypervisorMXBean extends java.lang.management.PlatformManagedObject {
    isEnvironmentVirtual(): boolean
    getVendor(): string
}

            }
        }
    }
}