declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class SslMacCore$SslMacSHA1 extends javax.crypto.MacSpi {
                    public constructor()
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    protected engineUpdate(arg0: byte): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdate(arg0: java.nio.ByteBuffer): void
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}