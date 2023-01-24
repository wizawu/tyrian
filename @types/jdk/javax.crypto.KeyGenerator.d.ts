declare namespace javax {
  namespace crypto {
    class KeyGenerator {
      protected constructor(
        arg0: javax.crypto.KeyGeneratorSpi,
        arg1: java.security.Provider,
        arg2: java.lang.String | string
      )
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String | string): javax.crypto.KeyGenerator
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): javax.crypto.KeyGenerator
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.Provider
      ): javax.crypto.KeyGenerator
      public getProvider(): java.security.Provider
      disableFailover(): void
      public init(arg0: java.security.SecureRandom): void
      public init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      public init(arg0: number | java.lang.Integer): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.SecureRandom): void
      public generateKey(): javax.crypto.SecretKey
    }
  }
}
