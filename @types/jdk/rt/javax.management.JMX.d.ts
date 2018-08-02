declare namespace javax {
    namespace management {
        class JMX {
            public static DEFAULT_VALUE_FIELD: string
            public static IMMUTABLE_INFO_FIELD: string
            public static INTERFACE_CLASS_NAME_FIELD: string
            public static LEGAL_VALUES_FIELD: string
            public static MAX_VALUE_FIELD: string
            public static MIN_VALUE_FIELD: string
            public static MXBEAN_FIELD: string
            public static OPEN_TYPE_FIELD: string
            public static ORIGINAL_TYPE_FIELD: string
            public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
            public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
            public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public static isMXBeanInterface(arg0: java.lang.Class<any>): boolean
            public static class: java.lang.Class<any>
        }
    }
}