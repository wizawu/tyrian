declare namespace sun {
    namespace security {
        namespace provider {
            class DSAKeyPairGenerator$Legacy extends sun.security.provider.DSAKeyPairGenerator implements java.security.interfaces.DSAKeyPairGenerator {
                public constructor()
                public initialize(arg0: int, arg1: boolean, arg2: java.security.SecureRandom): void
                public initialize(arg0: java.security.interfaces.DSAParams, arg1: java.security.SecureRandom): void
                public generateKeyPair(): java.security.KeyPair
                public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                public initialize(arg0: int, arg1: java.security.SecureRandom): void
                public static class: java.lang.Class<any>
            }
        }
    }
}