declare namespace javax {
    namespace crypto {
abstract class KeyGeneratorSpi {
    public constructor()
    protected engineInit(arg0: java.security.SecureRandom): void
    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
    protected engineGenerateKey(): javax.crypto.SecretKey
    public static class: java.lang.Class<any>
}

    }
}