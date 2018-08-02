declare namespace com {
    namespace ibm {
        namespace virtualization {
            namespace management {
                namespace internal {
                    class HypervisorMXBeanImpl implements com.ibm.virtualization.management.HypervisorMXBean {
                        public static getInstance(): com.ibm.virtualization.management.internal.HypervisorMXBeanImpl
                        public getVendor(): string
                        public isEnvironmentVirtual(): boolean
                        public getObjectName(): javax.management.ObjectName
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}