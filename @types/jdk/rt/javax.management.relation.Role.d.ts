declare namespace javax {
    namespace management {
        namespace relation {
            class Role implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>)
                public getRoleName(): string
                public getRoleValue(): java.util.List<javax.management.ObjectName>
                public setRoleName(arg0: java.lang.String | string): void
                public setRoleValue(arg0: java.util.List<javax.management.ObjectName>): void
                public toString(): string
                public clone(): java.lang.Object
                public static roleValueToString(arg0: java.util.List<javax.management.ObjectName>): string
                public static class: java.lang.Class<any>
            }
        }
    }
}