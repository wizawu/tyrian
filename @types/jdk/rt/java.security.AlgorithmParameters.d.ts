declare namespace java {
    namespace security {
        class AlgorithmParameters {
            protected constructor(arg0: java.security.AlgorithmParametersSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
            public getAlgorithm(): string
            public static getInstance(arg0: java.lang.String | string): java.security.AlgorithmParameters
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.AlgorithmParameters
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.AlgorithmParameters
            public getProvider(): java.security.Provider
            public init(arg0: java.security.spec.AlgorithmParameterSpec): void
            public init(arg0: byte[]): void
            public init(arg0: byte[], arg1: java.lang.String | string): void
            public getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
            public getEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
            public getEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.String | string): byte[]
            public toString<T extends java.security.spec.AlgorithmParameterSpec>(): string
            public static class: java.lang.Class<any>
        }
    }
}