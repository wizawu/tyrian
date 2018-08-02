declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                interface SunJmxMBeanServer extends javax.management.MBeanServer {
                    getMBeanInstantiator(): com.sun.jmx.mbeanserver.MBeanInstantiator
                    interceptorsEnabled(): boolean
                    getMBeanServerInterceptor(): javax.management.MBeanServer
                    setMBeanServerInterceptor(arg0: javax.management.MBeanServer): void
                    getMBeanServerDelegate(): javax.management.MBeanServerDelegate
                }
            }
        }
    }
}