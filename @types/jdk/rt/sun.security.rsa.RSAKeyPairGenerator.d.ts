declare namespace sun {
    namespace security {
        namespace rsa {
            class RSAKeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                public constructor()
                public initialize(arg0: int, arg1: java.security.SecureRandom): void
                public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                public generateKeyPair(): java.security.KeyPair
                public static class: java.lang.Class<any>
            }
        }
    }
}