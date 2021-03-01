declare namespace java {
  namespace security {

    class AlgorithmParameters {

      protected constructor(arg0: java.security.AlgorithmParametersSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public readonly getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String): java.security.AlgorithmParameters
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.AlgorithmParameters
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.AlgorithmParameters
      public readonly getProvider(): java.security.Provider
      public readonly init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public readonly init(arg0: byte[]): void
      public readonly init(arg0: byte[], arg1: java.lang.String): void
      public readonly getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
      public readonly getEncoded(): byte[]
      public readonly getEncoded(arg0: java.lang.String): byte[]
      public readonly toString(): java.lang.String
    }

  }
}
