declare namespace java {
    namespace security {
        abstract class Identity implements java.security.Principal , java.io.Serializable {
            protected constructor()
            public constructor(arg0: java.lang.String | string, arg1: java.security.IdentityScope)
            public constructor(arg0: java.lang.String | string)
            public getName(): string
            public getScope(): java.security.IdentityScope
            public getPublicKey(): java.security.PublicKey
            public setPublicKey(arg0: java.security.PublicKey): void
            public setInfo(arg0: java.lang.String | string): void
            public getInfo(): string
            public addCertificate(arg0: java.security.Certificate): void
            public removeCertificate(arg0: java.security.Certificate): void
            public certificates(): java.security.Certificate[]
            public equals(arg0: java.lang.Object): boolean
            protected identityEquals(arg0: java.security.Identity): boolean
            public toString(): string
            public toString(arg0: boolean): string
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}