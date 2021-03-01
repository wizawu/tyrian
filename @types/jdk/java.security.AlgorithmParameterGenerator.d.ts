declare namespace java {
  namespace security {

    class AlgorithmParameterGenerator {

      protected constructor(arg0: java.security.AlgorithmParameterGeneratorSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public readonly getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String): java.security.AlgorithmParameterGenerator
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.AlgorithmParameterGenerator
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.AlgorithmParameterGenerator
      public readonly getProvider(): java.security.Provider
      public readonly init(arg0: int): void
      public readonly init(arg0: int, arg1: java.security.SecureRandom): void
      public readonly init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public readonly init(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      public readonly generateParameters(): java.security.AlgorithmParameters
    }

  }
}
