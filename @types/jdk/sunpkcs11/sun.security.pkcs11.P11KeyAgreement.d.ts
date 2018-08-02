declare namespace sun {
    namespace security {
        namespace pkcs11 {
class P11KeyAgreement extends javax.crypto.KeyAgreementSpi {
    protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
    protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
    protected engineGenerateSecret(): byte[]
    protected engineGenerateSecret(arg0: byte[], arg1: int): int
    protected engineGenerateSecret(arg0: java.lang.String | string): javax.crypto.SecretKey
    public static class: java.lang.Class<any>
}

        }
    }
}