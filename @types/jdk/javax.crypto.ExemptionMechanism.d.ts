declare namespace javax {
  namespace crypto {

    class ExemptionMechanism {

      protected constructor(arg0: javax.crypto.ExemptionMechanismSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public readonly getName(): java.lang.String
      public static readonly getInstance(arg0: java.lang.String): javax.crypto.ExemptionMechanism
      public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.ExemptionMechanism
      public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.ExemptionMechanism
      public readonly getProvider(): java.security.Provider
      public readonly isCryptoAllowed(arg0: java.security.Key): boolean
      public readonly getOutputSize(arg0: int): int
      public readonly init(arg0: java.security.Key): void
      public readonly init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      public readonly init(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
      public readonly genExemptionBlob(): byte[]
      public readonly genExemptionBlob(arg0: byte[]): int
      public readonly genExemptionBlob(arg0: byte[], arg1: int): int
    }

  }
}
