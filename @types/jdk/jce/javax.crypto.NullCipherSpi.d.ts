declare namespace javax {
    namespace crypto {
class NullCipherSpi extends javax.crypto.CipherSpi {
    protected constructor()
    public engineSetMode(arg0: java.lang.String | string): void
    public engineSetPadding(arg0: java.lang.String | string): void
    protected engineGetBlockSize(): int
    protected engineGetOutputSize(arg0: int): int
    protected engineGetIV(): byte[]
    protected engineGetParameters(): java.security.AlgorithmParameters
    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
    protected engineGetKeySize(arg0: java.security.Key): int
    public static class: java.lang.Class<any>
}

    }
}