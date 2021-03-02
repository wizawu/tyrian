declare namespace java {
  namespace security {

    class AlgorithmParameters {
      protected constructor(arg0: java.security.AlgorithmParametersSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String): java.security.AlgorithmParameters
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.AlgorithmParameters
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.AlgorithmParameters
      public getProvider(): java.security.Provider
      public init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: byte[]): void
      public init(arg0: byte[], arg1: java.lang.String): void
      public getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
      public getEncoded(): byte[]
      public getEncoded(arg0: java.lang.String): byte[]
      public toString(): java.lang.String
    }

  }
}
