declare namespace javax {
  namespace crypto {

    abstract class MacSpi {
      public constructor()
      protected abstract engineGetMacLength(): number
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      protected abstract engineUpdate(arg0: number | java.lang.Byte): void
      protected abstract engineUpdate(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      protected engineUpdate(arg0: java.nio.ByteBuffer): void
      protected abstract engineDoFinal(): number[]
      protected abstract engineReset(): void
      public clone(): java.lang.Object
    }

  }
}
