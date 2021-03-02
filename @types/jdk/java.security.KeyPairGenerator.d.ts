declare namespace java {
  namespace security {

    abstract class KeyPairGenerator extends java.security.KeyPairGeneratorSpi {
      provider: java.security.Provider
      protected constructor(arg0: java.lang.String)
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String): java.security.KeyPairGenerator
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.KeyPairGenerator
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.KeyPairGenerator
      public getProvider(): java.security.Provider
      disableFailover(): void
      public initialize(arg0: int): void
      public initialize(arg0: int, arg1: java.security.SecureRandom): void
      public initialize(arg0: java.security.spec.AlgorithmParameterSpec): void
      public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      public genKeyPair(): java.security.KeyPair
      public generateKeyPair(): java.security.KeyPair
    }

  }
}
