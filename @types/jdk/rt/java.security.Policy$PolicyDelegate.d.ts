declare namespace java {
    namespace security {
        class Policy$PolicyDelegate extends java.security.Policy {
            public getType(): string
            public getParameters(): java.security.Policy$Parameters
            public getProvider(): java.security.Provider
            public getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
            public getPermissions(arg0: java.security.ProtectionDomain): java.security.PermissionCollection
            public implies(arg0: java.security.ProtectionDomain, arg1: java.security.Permission): boolean
            public refresh(): void
            public static class: java.lang.Class<any>
        }
    }
}