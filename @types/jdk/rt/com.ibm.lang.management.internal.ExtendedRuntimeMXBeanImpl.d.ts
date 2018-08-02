declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                namespace internal {
                    class ExtendedRuntimeMXBeanImpl extends com.ibm.java.lang.management.internal.RuntimeMXBeanImpl implements com.ibm.lang.management.RuntimeMXBean {
                        public static getInstance(): com.ibm.lang.management.RuntimeMXBean
                        public getCPULoad(): double
                        public getProcessID(): long
                        public getVMGeneratedCPULoad(): double
                        public getVMIdleState(): com.ibm.lang.management.RuntimeMXBean$VMIdleStates
                        public isVMIdle(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}