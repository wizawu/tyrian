declare namespace javax {
    namespace management {
        interface QueryExp extends java.io.Serializable {
            apply(arg0: javax.management.ObjectName): boolean
            setMBeanServer(arg0: javax.management.MBeanServer): void
        }
    }
}