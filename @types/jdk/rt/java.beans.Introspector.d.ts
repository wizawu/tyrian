declare namespace java {
    namespace beans {
        class Introspector {
            public static readonly USE_ALL_BEANINFO: int
            public static readonly IGNORE_IMMEDIATE_BEANINFO: int
            public static readonly IGNORE_ALL_BEANINFO: int
            public static getBeanInfo(arg0: java.lang.Class<any>): java.beans.BeanInfo
            public static getBeanInfo(arg0: java.lang.Class<any>, arg1: int): java.beans.BeanInfo
            public static getBeanInfo(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.beans.BeanInfo
            public static getBeanInfo(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: int): java.beans.BeanInfo
            public static decapitalize(arg0: java.lang.String | string): string
            public static getBeanInfoSearchPath(): java.lang.String[]
            public static setBeanInfoSearchPath(arg0: java.lang.String[]): void
            public static flushCaches(): void
            public static flushFromCaches(arg0: java.lang.Class<any>): void
            public static class: java.lang.Class<any>
        }
    }
}