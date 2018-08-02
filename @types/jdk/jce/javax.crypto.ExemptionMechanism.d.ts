declare namespace javax {
    namespace crypto {
        class ExemptionMechanism {
            protected constructor(arg0: javax.crypto.ExemptionMechanismSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
            public getName(): string
            public static getInstance(arg0: java.lang.String | string): javax.crypto.ExemptionMechanism
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.crypto.ExemptionMechanism
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.crypto.ExemptionMechanism
            public getProvider(): java.security.Provider
            public isCryptoAllowed(arg0: java.security.Key): boolean
            public getOutputSize(arg0: int): int
            public init(arg0: java.security.Key): void
            public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            public init(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
            public genExemptionBlob(): byte[]
            public genExemptionBlob(arg0: byte[]): int
            public genExemptionBlob(arg0: byte[], arg1: int): int
            protected finalize(): void
            public static class: java.lang.Class<any>
        }
    }
}