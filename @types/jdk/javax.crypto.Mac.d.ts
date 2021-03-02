declare namespace javax {
  namespace crypto {

    class Mac implements java.lang.Cloneable {
      protected constructor(arg0: javax.crypto.MacSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String | string): javax.crypto.Mac
      public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.crypto.Mac
      public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.crypto.Mac
      chooseFirstProvider(): void
      public getProvider(): java.security.Provider
      public getMacLength(): number
      public init(arg0: java.security.Key): void
      public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      public update(arg0: number | java.lang.Byte): void
      public update(arg0: byte[]): void
      public update(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public update(arg0: java.nio.ByteBuffer): void
      public doFinal(): number[]
      public doFinal(arg0: byte[], arg1: number | java.lang.Integer): void
      public doFinal(arg0: byte[]): number[]
      public reset(): void
      public clone(): java.lang.Object
    }

  }
}
