declare namespace sun {
    namespace security {
        namespace pkcs {
            class EncryptedPrivateKeyInfo {
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.x509.AlgorithmId, arg1: byte[])
                public getAlgorithm(): sun.security.x509.AlgorithmId
                public getEncryptedData(): byte[]
                public getEncoded(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}