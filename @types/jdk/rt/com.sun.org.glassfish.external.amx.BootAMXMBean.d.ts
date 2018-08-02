declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace amx {
interface BootAMXMBean {
    BOOT_AMX_OPERATION_NAME: string
    bootAMX(): javax.management.ObjectName
    getJMXServiceURLs(): javax.management.remote.JMXServiceURL[]
}

                    }
                }
            }
        }
    }
}