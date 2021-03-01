declare namespace javax {
  namespace crypto {

    abstract class MacSpi {

      public constructor()
      protected abstract engineGetMacLength(): int
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      protected abstract engineUpdate(arg0: byte): void
      protected abstract engineUpdate(arg0: byte[], arg1: int, arg2: int): void
      protected engineUpdate(arg0: java.nio.ByteBuffer): void
      protected abstract engineDoFinal(): byte[]
      protected abstract engineReset(): void
      public clone(): java.lang.Object
    }

  }
}
