declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
interface DynamicMBean2 extends javax.management.DynamicMBean {
    getResource(): java.lang.Object
    getClassName(): string
    preRegister2(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
    registerFailed(): void
}

            }
        }
    }
}