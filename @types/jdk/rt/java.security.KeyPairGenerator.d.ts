declare namespace java {
    namespace security {
        abstract class KeyPairGenerator extends java.security.KeyPairGeneratorSpi {
            protected constructor(arg0: java.lang.String | string)
            public getAlgorithm(): string
            public static getInstance(arg0: java.lang.String | string): java.security.KeyPairGenerator
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.KeyPairGenerator
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.KeyPairGenerator
            public getProvider(): java.security.Provider
            public initialize(arg0: int): void
            public initialize(arg0: int, arg1: java.security.SecureRandom): void
            public initialize(arg0: java.security.spec.AlgorithmParameterSpec): void
            public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
            public genKeyPair(): java.security.KeyPair
            public generateKeyPair(): java.security.KeyPair
            public static class: java.lang.Class<any>
        }
    }
}