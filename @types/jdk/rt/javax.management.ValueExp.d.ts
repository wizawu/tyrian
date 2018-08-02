declare namespace javax {
    namespace management {
        interface ValueExp extends java.io.Serializable {
            apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            setMBeanServer(arg0: javax.management.MBeanServer): void
        }
    }
}