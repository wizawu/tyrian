declare namespace javax {
  namespace crypto {

    class KeyAgreement {

      protected constructor(arg0: javax.crypto.KeyAgreementSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public readonly getAlgorithm(): java.lang.String
      public static readonly getInstance(arg0: java.lang.String): javax.crypto.KeyAgreement
      public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.KeyAgreement
      public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.KeyAgreement
      chooseFirstProvider(): void
      public readonly getProvider(): java.security.Provider
      public readonly init(arg0: java.security.Key): void
      public readonly init(arg0: java.security.Key, arg1: java.security.SecureRandom): void
      public readonly init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      public readonly init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      public readonly doPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
      public readonly generateSecret(): byte[]
      public readonly generateSecret(arg0: byte[], arg1: int): int
      public readonly generateSecret(arg0: java.lang.String): javax.crypto.SecretKey
    }

  }
}
