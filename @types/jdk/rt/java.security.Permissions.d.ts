declare namespace java {
    namespace security {
        class Permissions extends java.security.PermissionCollection implements java.io.Serializable {
            public constructor()
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
            public static class: java.lang.Class<any>
        }
    }
}