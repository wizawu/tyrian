declare namespace javax {
  namespace crypto {

    class Cipher {
      public static readonly ENCRYPT_MODE: int
      public static readonly DECRYPT_MODE: int
      public static readonly WRAP_MODE: int
      public static readonly UNWRAP_MODE: int
      public static readonly PUBLIC_KEY: int
      public static readonly PRIVATE_KEY: int
      public static readonly SECRET_KEY: int
      protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: java.lang.String)
      constructor(arg0: javax.crypto.CipherSpi, arg1: java.lang.String)
      public static getInstance(arg0: java.lang.String): javax.crypto.Cipher
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.Cipher
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.Cipher
      chooseFirstProvider(): void
      public getProvider(): java.security.Provider
      public getAlgorithm(): java.lang.String
      public getBlockSize(): int
      public getOutputSize(arg0: int): int
      public getIV(): byte[]
      public getParameters(): java.security.AlgorithmParameters
      public getExemptionMechanism(): javax.crypto.ExemptionMechanism
      public init(arg0: int, arg1: java.security.Key): void
      public init(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
      public init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
      public init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters): void
      public init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
      public init(arg0: int, arg1: java.security.cert.Certificate): void
      public init(arg0: int, arg1: java.security.cert.Certificate, arg2: java.security.SecureRandom): void
      public update(arg0: byte[]): byte[]
      public update(arg0: byte[], arg1: int, arg2: int): byte[]
      public update(arg0: byte[], arg1: int, arg2: int, arg3: byte[]): int
      public update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
      public update(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      public doFinal(): byte[]
      public doFinal(arg0: byte[], arg1: int): int
      public doFinal(arg0: byte[]): byte[]
      public doFinal(arg0: byte[], arg1: int, arg2: int): byte[]
      public doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[]): int
      public doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
      public doFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      public wrap(arg0: java.security.Key): byte[]
      public unwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
      public static getMaxAllowedKeyLength(arg0: java.lang.String): int
      public static getMaxAllowedParameterSpec(arg0: java.lang.String): java.security.spec.AlgorithmParameterSpec
      public updateAAD(arg0: byte[]): void
      public updateAAD(arg0: byte[], arg1: int, arg2: int): void
      public updateAAD(arg0: java.nio.ByteBuffer): void
    }

  }
}
