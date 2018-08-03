declare namespace sun {
    namespace security {
        namespace x509 {
            class OtherName implements sun.security.x509.GeneralNameInterface {
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: byte[])
                public constructor(arg0: sun.security.util.DerValue)
                public getOID(): sun.security.util.ObjectIdentifier
                public getNameValue(): byte[]
                public getType(): int
                public encode(arg0: sun.security.util.DerOutputStream): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public constrains(arg0: sun.security.x509.GeneralNameInterface): int
                public subtreeDepth(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}