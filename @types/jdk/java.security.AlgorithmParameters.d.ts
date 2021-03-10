declare namespace java {
  namespace security {

    class AlgorithmParameters {
      protected constructor(arg0: java.security.AlgorithmParametersSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String | string): java.security.AlgorithmParameters
      public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.AlgorithmParameters
      public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.AlgorithmParameters
      public getProvider(): java.security.Provider
      public init(arg0: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: number[] | java.lang.Byte[]): void
      public init(arg0: number[] | java.lang.Byte[], arg1: java.lang.String | string): void
      public getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
      public getEncoded(): number[]
      public getEncoded(arg0: java.lang.String | string): number[]
      public toString(): java.lang.String
    }

  }
}
