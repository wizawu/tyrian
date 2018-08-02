declare namespace javax {
    namespace management {
        interface MBeanRegistration {
            preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
            postRegister(arg0: java.lang.Boolean | boolean): void
            preDeregister(): void
            postDeregister(): void
        }
    }
}