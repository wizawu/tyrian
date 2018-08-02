declare namespace sun {
    namespace security {
        namespace pkcs10 {
            class PKCS10 {
                public constructor(arg0: java.security.PublicKey)
                public constructor(arg0: java.security.PublicKey, arg1: sun.security.pkcs10.PKCS10Attributes | sun.security.pkcs10.PKCS10Attributes$$Lambda)
                public constructor(arg0: byte[])
                public encodeAndSign(arg0: sun.security.x509.X500Name, arg1: java.security.Signature): void
                public getSubjectName(): sun.security.x509.X500Name
                public getSubjectPublicKeyInfo(): java.security.PublicKey
                public getSigAlg(): string
                public getAttributes(): sun.security.pkcs10.PKCS10Attributes
                public getEncoded(): byte[]
                public print(arg0: java.io.PrintStream): void
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}