declare namespace java {
  namespace security {
    class AlgorithmParameterGenerator {
      protected constructor(
        arg0: java.security.AlgorithmParameterGeneratorSpi,
        arg1: java.security.Provider,
        arg2: java.lang.String | string
      )
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String | string): java.security.AlgorithmParameterGenerator
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): java.security.AlgorithmParameterGenerator
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.Provider
      ): java.security.AlgorithmParameterGenerator
      public getProvider(): java.security.Provider
      public init(arg0: number | java.lang.Integer): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.SecureRandom): void
      public init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      public generateParameters(): java.security.AlgorithmParameters
    }
  }
}
