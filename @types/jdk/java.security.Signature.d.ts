declare namespace java {
  namespace security {

    abstract class Signature extends java.security.SignatureSpi {
      provider: java.security.Provider
      protected static readonly UNINITIALIZED: int
      protected static readonly SIGN: int
      protected static readonly VERIFY: int
      protected state: int
      protected constructor(arg0: java.lang.String | string)
      public static getInstance(arg0: java.lang.String | string): java.security.Signature
      public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Signature
      public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.Signature
      public getProvider(): java.security.Provider
      chooseFirstProvider(): void
      public initVerify(arg0: java.security.PublicKey): void
      initVerify(arg0: java.security.PublicKey, arg1: java.security.spec.AlgorithmParameterSpec): void
      public initVerify(arg0: java.security.cert.Certificate): void
      initVerify(arg0: java.security.cert.Certificate, arg1: java.security.spec.AlgorithmParameterSpec): void
      public initSign(arg0: java.security.PrivateKey): void
      public initSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
      initSign(arg0: java.security.PrivateKey, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      public sign(): number[]
      public sign(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public verify(arg0: number[] | java.lang.Byte[]): boolean
      public verify(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
      public update(arg0: number | java.lang.Byte): void
      public update(arg0: number[] | java.lang.Byte[]): void
      public update(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public update(arg0: java.nio.ByteBuffer): void
      public getAlgorithm(): java.lang.String
      public toString(): java.lang.String
      public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public setParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
      public getParameters(): java.security.AlgorithmParameters
      public getParameter(arg0: java.lang.String | string): java.lang.Object
      public clone(): java.lang.Object
    }

  }
}
