declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
abstract class PBES2Core extends javax.crypto.CipherSpi {
    protected engineSetMode(arg0: java.lang.String | string): void
    protected engineSetPadding(arg0: java.lang.String | string): void
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
    protected engineWrap(arg0: java.security.Key): byte[]
    protected engineUnwrap(arg0: byte[], arg1: java.lang.String | string, arg2: int): java.security.Key
    public static class: java.lang.Class<any>
}

            }
        }
    }
}