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
      protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
      constructor(arg0: javax.crypto.CipherSpi, arg1: java.lang.String | string)
      public static getInstance(arg0: java.lang.String | string): javax.crypto.Cipher
      public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.crypto.Cipher
      public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.crypto.Cipher
      chooseFirstProvider(): void
      public getProvider(): java.security.Provider
      public getAlgorithm(): java.lang.String
      public getBlockSize(): number
      public getOutputSize(arg0: number | java.lang.Integer): number
      public getIV(): number[]
      public getParameters(): java.security.AlgorithmParameters
      public getExemptionMechanism(): javax.crypto.ExemptionMechanism
      public init(arg0: number | java.lang.Integer, arg1: java.security.Key): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.SecureRandom): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.AlgorithmParameters): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.cert.Certificate): void
      public init(arg0: number | java.lang.Integer, arg1: java.security.cert.Certificate, arg2: java.security.SecureRandom): void
      public update(arg0: byte[]): number[]
      public update(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public update(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[]): number
      public update(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer): number
      public update(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): number
      public doFinal(): number[]
      public doFinal(arg0: byte[], arg1: number | java.lang.Integer): number
      public doFinal(arg0: byte[]): number[]
      public doFinal(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      public doFinal(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[]): number
      public doFinal(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer): number
      public doFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): number
      public wrap(arg0: java.security.Key): number[]
      public unwrap(arg0: byte[], arg1: java.lang.String | string, arg2: number | java.lang.Integer): java.security.Key
      public static getMaxAllowedKeyLength(arg0: java.lang.String | string): number
      public static getMaxAllowedParameterSpec(arg0: java.lang.String | string): java.security.spec.AlgorithmParameterSpec
      public updateAAD(arg0: byte[]): void
      public updateAAD(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public updateAAD(arg0: java.nio.ByteBuffer): void
    }

  }
}
