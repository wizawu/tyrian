declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificatePolicyId {
                public constructor(arg0: sun.security.util.ObjectIdentifier)
                public constructor(arg0: sun.security.util.DerValue)
                public getIdentifier(): sun.security.util.ObjectIdentifier
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}