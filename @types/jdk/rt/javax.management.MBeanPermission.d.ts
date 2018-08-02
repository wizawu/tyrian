declare namespace javax {
    namespace management {
        class MBeanPermission extends java.security.Permission {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.ObjectName, arg3: java.lang.String | string)
            public getActions(): string
            public hashCode(): int
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
    }
}