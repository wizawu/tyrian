declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11TlsKeyMaterialGenerator extends javax.crypto.KeyGeneratorSpi {
                protected engineInit(arg0: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineGenerateKey(): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
        }
    }
}