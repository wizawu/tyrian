declare namespace javax {
    namespace management {
        class JMX {
            public static readonly DEFAULT_VALUE_FIELD: string
            public static readonly IMMUTABLE_INFO_FIELD: string
            public static readonly INTERFACE_CLASS_NAME_FIELD: string
            public static readonly LEGAL_VALUES_FIELD: string
            public static readonly MAX_VALUE_FIELD: string
            public static readonly MIN_VALUE_FIELD: string
            public static readonly MXBEAN_FIELD: string
            public static readonly OPEN_TYPE_FIELD: string
            public static readonly ORIGINAL_TYPE_FIELD: string
            public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
            public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
            public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean): T
            public static isMXBeanInterface<T>(arg0: java.lang.Class<any>): boolean
            public static class: java.lang.Class<any>
        }
    }
}