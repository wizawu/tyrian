declare namespace javax {
    namespace crypto {
        abstract class ExemptionMechanismSpi {
            public constructor()
            protected engineGetOutputSize(arg0: int): int
            protected engineInit(arg0: java.security.Key): void
            protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            protected engineInit(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
            protected engineGenExemptionBlob(): byte[]
            protected engineGenExemptionBlob(arg0: byte[], arg1: int): int
            public static class: java.lang.Class<any>
        }
    }
}