declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
abstract class KeyGeneratorCore$HmacSHA2KG extends javax.crypto.KeyGeneratorSpi {
    protected constructor(arg0: java.lang.String | string, arg1: int)
    protected engineInit(arg0: java.security.SecureRandom): void
    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
    protected engineGenerateKey(): javax.crypto.SecretKey
    public static class: java.lang.Class<any>
}

            }
        }
    }
}