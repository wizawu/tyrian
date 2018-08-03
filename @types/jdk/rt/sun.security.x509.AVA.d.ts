declare namespace sun {
    namespace security {
        namespace x509 {
            class AVA implements sun.security.util.DerEncoder {
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: sun.security.util.DerValue)
                public getObjectIdentifier(): sun.security.util.ObjectIdentifier
                public getDerValue(): sun.security.util.DerValue
                public getValueString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public encode(arg0: sun.security.util.DerOutputStream): void
                public derEncode(arg0: java.io.OutputStream): void
                public toString(): string
                public toRFC1779String(): string
                public toRFC1779String(arg0: java.util.Map<java.lang.String, java.lang.String>): string
                public toRFC2253String(): string
                public toRFC2253String(arg0: java.util.Map<java.lang.String, java.lang.String>): string
                public toRFC2253CanonicalString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}