declare namespace javax {
    namespace crypto {
        namespace spec {
            class PBEParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: byte[], arg1: int)
                public constructor(arg0: byte[], arg1: int, arg2: java.security.spec.AlgorithmParameterSpec)
                public getSalt(): byte[]
                public getIterationCount(): int
                public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                public static class: java.lang.Class<any>
            }
        }
    }
}