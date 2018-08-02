declare namespace javax {
    namespace crypto {
        abstract class CipherSpi {
            public constructor()
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
            protected engineUpdate(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
            protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            protected engineDoFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            protected engineWrap(arg0: java.security.Key): byte[]
            protected engineUnwrap(arg0: byte[], arg1: java.lang.String | string, arg2: int): java.security.Key
            protected engineGetKeySize(arg0: java.security.Key): int
            protected engineUpdateAAD(arg0: byte[], arg1: int, arg2: int): void
            protected engineUpdateAAD(arg0: java.nio.ByteBuffer): void
            public static class: java.lang.Class<any>
        }
    }
}