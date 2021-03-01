declare namespace javax {
  namespace crypto {

    class Mac implements java.lang.Cloneable {

      protected constructor(arg0: javax.crypto.MacSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public readonly getAlgorithm(): java.lang.String
      public static readonly getInstance(arg0: java.lang.String): javax.crypto.Mac
      public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.Mac
      public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.Mac
      chooseFirstProvider(): void
      public readonly getProvider(): java.security.Provider
      public readonly getMacLength(): int
      public readonly init(arg0: java.security.Key): void
      public readonly init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      public readonly update(arg0: byte): void
      public readonly update(arg0: byte[]): void
      public readonly update(arg0: byte[], arg1: int, arg2: int): void
      public readonly update(arg0: java.nio.ByteBuffer): void
      public readonly doFinal(): byte[]
      public readonly doFinal(arg0: byte[], arg1: int): void
      public readonly doFinal(arg0: byte[]): byte[]
      public readonly reset(): void
      public readonly clone(): java.lang.Object
    }

  }
}
