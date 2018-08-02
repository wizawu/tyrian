declare namespace javax {
    namespace crypto {
class Cipher {
    public static ENCRYPT_MODE: int
    public static DECRYPT_MODE: int
    public static WRAP_MODE: int
    public static UNWRAP_MODE: int
    public static PUBLIC_KEY: int
    public static PRIVATE_KEY: int
    public static SECRET_KEY: int
    protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
    public static getInstance(arg0: java.lang.String | string): javax.crypto.Cipher
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.crypto.Cipher
    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.crypto.Cipher
    public getProvider(): java.security.Provider
    public getAlgorithm(): string
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
    public unwrap(arg0: byte[], arg1: java.lang.String | string, arg2: int): java.security.Key
    public static getMaxAllowedKeyLength(arg0: java.lang.String | string): int
    public static getMaxAllowedParameterSpec(arg0: java.lang.String | string): java.security.spec.AlgorithmParameterSpec
    public updateAAD(arg0: byte[]): void
    public updateAAD(arg0: byte[], arg1: int, arg2: int): void
    public updateAAD(arg0: java.nio.ByteBuffer): void
    public static class: java.lang.Class<any>
}

    }
}