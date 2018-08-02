declare namespace java {
    namespace security {
        abstract class IdentityScope extends java.security.Identity {
            protected constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.security.IdentityScope)
            public static getSystemScope(): java.security.IdentityScope
            protected static setSystemScope(arg0: java.security.IdentityScope): void
            public size(): int
            public getIdentity(arg0: java.lang.String | string): java.security.Identity
            public getIdentity(arg0: java.security.Principal): java.security.Identity
            public getIdentity(arg0: java.security.PublicKey): java.security.Identity
            public addIdentity(arg0: java.security.Identity): void
            public removeIdentity(arg0: java.security.Identity): void
            public identities(): java.util.Enumeration<java.security.Identity>
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}