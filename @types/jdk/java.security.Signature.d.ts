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
      public readonly getProvider(): java.security.Provider
      chooseFirstProvider(): void
      public readonly initVerify(arg0: java.security.PublicKey): void
      readonly initVerify(arg0: java.security.PublicKey, arg1: java.security.spec.AlgorithmParameterSpec): void
      public readonly initVerify(arg0: java.security.cert.Certificate): void
      readonly initVerify(arg0: java.security.cert.Certificate, arg1: java.security.spec.AlgorithmParameterSpec): void
      public readonly initSign(arg0: java.security.PrivateKey): void
      public readonly initSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
      readonly initSign(arg0: java.security.PrivateKey, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      public readonly sign(): byte[]
      public readonly sign(arg0: byte[], arg1: int, arg2: int): int
      public readonly verify(arg0: byte[]): boolean
      public readonly verify(arg0: byte[], arg1: int, arg2: int): boolean
      public readonly update(arg0: byte): void
      public readonly update(arg0: byte[]): void
      public readonly update(arg0: byte[], arg1: int, arg2: int): void
      public readonly update(arg0: java.nio.ByteBuffer): void
      public readonly getAlgorithm(): java.lang.String
      public toString(): java.lang.String
      public readonly setParameter(arg0: java.lang.String, arg1: java.lang.Object): void
      public readonly setParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
      public readonly getParameters(): java.security.AlgorithmParameters
      public readonly getParameter(arg0: java.lang.String): java.lang.Object
      public clone(): java.lang.Object
    }

  }
}
