declare namespace javax {
    namespace crypto {
        namespace spec {
            class SecretKeySpec implements java.security.spec.KeySpec , javax.crypto.SecretKey {
                public constructor(arg0: byte[], arg1: java.lang.String | string)
                public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string)
                public getAlgorithm(): string
                public getFormat(): string
                public getEncoded(): byte[]
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}