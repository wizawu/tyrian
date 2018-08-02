declare namespace sun {
    namespace security {
        namespace x509 {
            class KeyIdentifier {
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: java.security.PublicKey)
                public getIdentifier(): byte[]
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}