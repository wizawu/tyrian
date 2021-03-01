declare namespace javax {
  namespace crypto {

    class KeyGenerator {

      protected constructor(arg0: javax.crypto.KeyGeneratorSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public readonly getAlgorithm(): java.lang.String
      public static readonly getInstance(arg0: java.lang.String): javax.crypto.KeyGenerator
      public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.KeyGenerator
      public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.KeyGenerator
      public readonly getProvider(): java.security.Provider
      disableFailover(): void
      public readonly init(arg0: java.security.SecureRandom): void
      public readonly init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public readonly init(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      public readonly init(arg0: int): void
      public readonly init(arg0: int, arg1: java.security.SecureRandom): void
      public readonly generateKey(): javax.crypto.SecretKey
    }

  }
}
