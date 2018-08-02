declare namespace javax {
    namespace management {
        namespace relation {
            class RoleUnresolved implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>, arg2: int)
                public getRoleName(): string
                public getRoleValue(): java.util.List<javax.management.ObjectName>
                public getProblemType(): int
                public setRoleName(arg0: java.lang.String | string): void
                public setRoleValue(arg0: java.util.List<javax.management.ObjectName>): void
                public setProblemType(arg0: int): void
                public clone(): java.lang.Object
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}