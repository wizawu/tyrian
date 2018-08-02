declare namespace sun {
    namespace security {
        namespace pkcs11 {
class P11Mac extends javax.crypto.MacSpi {
    protected engineGetMacLength(): int
    protected engineReset(): void
    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
    protected engineDoFinal(): byte[]
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineUpdate(arg0: java.nio.ByteBuffer): void
    public static class: java.lang.Class<any>
}

        }
    }
}