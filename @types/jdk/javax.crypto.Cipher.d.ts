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
      public static readonly getInstance(arg0: java.lang.String): javax.crypto.Cipher
      public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.Cipher
      public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.Cipher
      chooseFirstProvider(): void
      public readonly getProvider(): java.security.Provider
      public readonly getAlgorithm(): java.lang.String
      public readonly getBlockSize(): int
      public readonly getOutputSize(arg0: int): int
      public readonly getIV(): byte[]
      public readonly getParameters(): java.security.AlgorithmParameters
      public readonly getExemptionMechanism(): javax.crypto.ExemptionMechanism
      public readonly init(arg0: int, arg1: java.security.Key): void
      public readonly init(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
      public readonly init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec): void
      public readonly init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
      public readonly init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters): void
      public readonly init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
      public readonly init(arg0: int, arg1: java.security.cert.Certificate): void
      public readonly init(arg0: int, arg1: java.security.cert.Certificate, arg2: java.security.SecureRandom): void
      public readonly update(arg0: byte[]): byte[]
      public readonly update(arg0: byte[], arg1: int, arg2: int): byte[]
      public readonly update(arg0: byte[], arg1: int, arg2: int, arg3: byte[]): int
      public readonly update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
      public readonly update(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      public readonly doFinal(): byte[]
      public readonly doFinal(arg0: byte[], arg1: int): int
      public readonly doFinal(arg0: byte[]): byte[]
      public readonly doFinal(arg0: byte[], arg1: int, arg2: int): byte[]
      public readonly doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[]): int
      public readonly doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
      public readonly doFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      public readonly wrap(arg0: java.security.Key): byte[]
      public readonly unwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
      public static readonly getMaxAllowedKeyLength(arg0: java.lang.String): int
      public static readonly getMaxAllowedParameterSpec(arg0: java.lang.String): java.security.spec.AlgorithmParameterSpec
      public readonly updateAAD(arg0: byte[]): void
      public readonly updateAAD(arg0: byte[], arg1: int, arg2: int): void
      public readonly updateAAD(arg0: java.nio.ByteBuffer): void
    }

  }
}
