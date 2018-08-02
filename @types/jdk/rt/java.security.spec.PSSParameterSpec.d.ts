declare namespace java {
    namespace security {
        namespace spec {
            class PSSParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public static DEFAULT: java.security.spec.PSSParameterSpec
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.spec.AlgorithmParameterSpec, arg3: int, arg4: int)
                public constructor(arg0: int)
                public getDigestAlgorithm(): string
                public getMGFAlgorithm(): string
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
                public getSaltLength(): int
                public getTrailerField(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}