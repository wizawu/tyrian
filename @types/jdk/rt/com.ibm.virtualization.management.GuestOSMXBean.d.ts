declare namespace com {
    namespace ibm {
        namespace virtualization {
            namespace management {
                interface GuestOSMXBean extends java.lang.management.PlatformManagedObject {
                    retrieveProcessorUsage(arg0: com.ibm.virtualization.management.GuestOSProcessorUsage): com.ibm.virtualization.management.GuestOSProcessorUsage
                    retrieveProcessorUsage(): com.ibm.virtualization.management.GuestOSProcessorUsage
                    retrieveMemoryUsage(arg0: com.ibm.virtualization.management.GuestOSMemoryUsage): com.ibm.virtualization.management.GuestOSMemoryUsage
                    retrieveMemoryUsage(): com.ibm.virtualization.management.GuestOSMemoryUsage
                }
            }
        }
    }
}