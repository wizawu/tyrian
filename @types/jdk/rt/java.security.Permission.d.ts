declare namespace java {
    namespace security {
        abstract class Permission implements java.security.Guard , java.io.Serializable {
            public constructor(arg0: java.lang.String | string)
            public checkGuard(arg0: java.lang.Object): void
            public abstract implies(arg0: java.security.Permission): boolean
            public abstract equals(arg0: java.lang.Object): boolean
            public abstract hashCode(): int
            public getName(): string
            public abstract getActions(): string
            public newPermissionCollection(): java.security.PermissionCollection
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}