declare namespace java {
    namespace security {
        class UnresolvedPermission extends java.security.Permission implements java.io.Serializable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.security.cert.Certificate[])
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public getActions(): string
            public getUnresolvedType(): string
            public getUnresolvedName(): string
            public getUnresolvedActions(): string
            public getUnresolvedCerts(): java.security.cert.Certificate[]
            public toString(): string
            public newPermissionCollection(): java.security.PermissionCollection
            public static class: java.lang.Class<any>
        }
    }
}