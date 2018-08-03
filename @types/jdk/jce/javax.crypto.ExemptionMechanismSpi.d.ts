declare namespace javax {
    namespace crypto {
        abstract class ExemptionMechanismSpi {
            public constructor()
            protected abstract engineGetOutputSize(arg0: int): int
            protected abstract engineInit(arg0: java.security.Key): void
            protected abstract engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            protected abstract engineInit(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
            protected abstract engineGenExemptionBlob(): byte[]
            protected abstract engineGenExemptionBlob(arg0: byte[], arg1: int): int
            public static class: java.lang.Class<any>
        }
    }
}