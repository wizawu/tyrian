declare namespace sun {
    namespace security {
        namespace x509 {
            class URIName implements sun.security.x509.GeneralNameInterface {
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: java.lang.String | string)
                public static nameConstraint(arg0: sun.security.util.DerValue): sun.security.x509.URIName
                public getType(): int
                public encode(arg0: sun.security.util.DerOutputStream): void
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public getURI(): java.net.URI
                public getName(): string
                public getScheme(): string
                public getHost(): string
                public getHostObject(): java.lang.Object
                public hashCode(): int
                public constrains(arg0: sun.security.x509.GeneralNameInterface): int
                public subtreeDepth(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}