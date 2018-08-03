declare namespace javax {
    namespace crypto {
        namespace spec {
            class OAEPParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public static readonly DEFAULT: javax.crypto.spec.OAEPParameterSpec
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.spec.AlgorithmParameterSpec, arg3: javax.crypto.spec.PSource)
                public getDigestAlgorithm(): string
                public getMGFAlgorithm(): string
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
                public getPSource(): javax.crypto.spec.PSource
                public static class: java.lang.Class<any>
            }
        }
    }
}