declare namespace sun {
    namespace security {
        namespace provider {
            class PolicyPermissions extends java.security.PermissionCollection {
                public add(arg0: java.security.Permission): void
                public implies(arg0: java.security.Permission): boolean
                public elements(): java.util.Enumeration<java.security.Permission>
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}