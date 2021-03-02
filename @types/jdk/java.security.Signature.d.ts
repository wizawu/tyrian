declare namespace java {
  namespace security {

    abstract class Signature extends java.security.SignatureSpi {
      provider: java.security.Provider
      protected static readonly UNINITIALIZED: int
      protected static readonly SIGN: int
      protected static readonly VERIFY: int
      protected state: int
      protected constructor(arg0: java.lang.String)
      public static getInstance(arg0: java.lang.String): java.security.Signature
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.Signature
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.Signature
      public getProvider(): java.security.Provider
      chooseFirstProvider(): void
      public initVerify(arg0: java.security.PublicKey): void
      initVerify(arg0: java.security.PublicKey, arg1: java.security.spec.AlgorithmParameterSpec): void
      public initVerify(arg0: java.security.cert.Certificate): void
      initVerify(arg0: java.security.cert.Certificate, arg1: java.security.spec.AlgorithmParameterSpec): void
      public initSign(arg0: java.security.PrivateKey): void
      public initSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
      initSign(arg0: java.security.PrivateKey, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      public sign(): byte[]
      public sign(arg0: byte[], arg1: int, arg2: int): int
      public verify(arg0: byte[]): boolean
      public verify(arg0: byte[], arg1: int, arg2: int): boolean
      public update(arg0: byte): void
      public update(arg0: byte[]): void
      public update(arg0: byte[], arg1: int, arg2: int): void
      public update(arg0: java.nio.ByteBuffer): void
      public getAlgorithm(): java.lang.String
      public toString(): java.lang.String
      public setParameter(arg0: java.lang.String, arg1: java.lang.Object): void
      public setParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
      public getParameters(): java.security.AlgorithmParameters
      public getParameter(arg0: java.lang.String): java.lang.Object
      public clone(): java.lang.Object
    }

  }
}
