declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                interface RuntimeMXBean extends java.lang.management.RuntimeMXBean {
                    getCPULoad(): double
                    getProcessID(): long
                    getVMGeneratedCPULoad(): double
                    getVMIdleState(): com.ibm.lang.management.RuntimeMXBean$VMIdleStates
                    isVMIdle(): boolean
                }
            }
        }
    }
}