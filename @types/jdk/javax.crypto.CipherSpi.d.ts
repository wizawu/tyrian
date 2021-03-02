declare namespace javax {
  namespace crypto {

    abstract class CipherSpi {
      public constructor()
      protected abstract engineSetMode(arg0: java.lang.String): void
      protected abstract engineSetPadding(arg0: java.lang.String): void
      protected abstract engineGetBlockSize(): int
      protected abstract engineGetOutputSize(arg0: int): int
      protected abstract engineGetIV(): byte[]
      protected abstract engineGetParameters(): java.security.AlgorithmParameters
      protected abstract engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
      protected abstract engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
      protected abstract engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
      protected abstract engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
      protected abstract engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
      protected engineUpdate(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      protected abstract engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
      protected abstract engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
      protected engineDoFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      static getTempArraySize(arg0: int): int
      protected engineWrap(arg0: java.security.Key): byte[]
      protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
      protected engineGetKeySize(arg0: java.security.Key): int
      protected engineUpdateAAD(arg0: byte[], arg1: int, arg2: int): void
      protected engineUpdateAAD(arg0: java.nio.ByteBuffer): void
    }

  }
}
