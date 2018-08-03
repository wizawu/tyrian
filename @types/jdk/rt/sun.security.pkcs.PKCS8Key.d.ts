declare namespace sun {
    namespace security {
        namespace pkcs {
            class PKCS8Key implements java.security.PrivateKey {
                protected algid: sun.security.x509.AlgorithmId
                protected key: byte[]
                protected encodedKey: byte[]
                public static version: java.math.BigInteger
                public constructor()
                public static parse(arg0: sun.security.util.DerValue): sun.security.pkcs.PKCS8Key
                public static parseKey(arg0: sun.security.util.DerValue): java.security.PrivateKey
                protected parseKeyBits(): void
                public getAlgorithm(): string
                public getAlgorithmId(): sun.security.x509.AlgorithmId
                public encode(arg0: sun.security.util.DerOutputStream): void
                public getEncoded(): byte[]
                public getFormat(): string
                public encode(): byte[]
                public decode(arg0: java.io.InputStream): void
                public decode(arg0: byte[]): void
                protected writeReplace(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}