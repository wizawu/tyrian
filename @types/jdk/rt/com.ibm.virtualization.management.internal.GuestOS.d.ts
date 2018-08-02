declare namespace com {
    namespace ibm {
        namespace virtualization {
            namespace management {
                namespace internal {
class GuestOS implements com.ibm.virtualization.management.GuestOSMXBean {
    public static getInstance(): com.ibm.virtualization.management.internal.GuestOS
    public getObjectName(): javax.management.ObjectName
    public retrieveProcessorUsage(): com.ibm.virtualization.management.GuestOSProcessorUsage
    public retrieveProcessorUsage(arg0: com.ibm.virtualization.management.GuestOSProcessorUsage): com.ibm.virtualization.management.GuestOSProcessorUsage
    public retrieveMemoryUsage(): com.ibm.virtualization.management.GuestOSMemoryUsage
    public retrieveMemoryUsage(arg0: com.ibm.virtualization.management.GuestOSMemoryUsage): com.ibm.virtualization.management.GuestOSMemoryUsage
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}