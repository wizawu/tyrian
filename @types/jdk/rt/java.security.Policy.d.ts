declare namespace java {
    namespace security {
        abstract class Policy {
            public static UNSUPPORTED_EMPTY_COLLECTION: java.security.PermissionCollection
            public constructor()
            public static getPolicy(): java.security.Policy
            public static setPolicy(arg0: java.security.Policy): void
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Policy$Parameters): java.security.Policy
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Policy$Parameters, arg2: java.lang.String | string): java.security.Policy
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Policy$Parameters, arg2: java.security.Provider): java.security.Policy
            public getProvider(): java.security.Provider
            public getType(): string
            public getParameters(): java.security.Policy$Parameters
            public getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
            public getPermissions(arg0: java.security.ProtectionDomain): java.security.PermissionCollection
            public implies(arg0: java.security.ProtectionDomain, arg1: java.security.Permission): boolean
            public refresh(): void
            public static class: java.lang.Class<any>
        }
    }
}