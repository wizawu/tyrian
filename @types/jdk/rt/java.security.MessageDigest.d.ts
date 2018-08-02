declare namespace java {
    namespace security {
abstract class MessageDigest extends java.security.MessageDigestSpi {
    protected constructor(arg0: java.lang.String | string)
    public static getInstance(arg0: java.lang.String | string): java.security.MessageDigest
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.MessageDigest
    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.MessageDigest
    public getProvider(): java.security.Provider
    public update(arg0: byte): void
    public update(arg0: byte[], arg1: int, arg2: int): void
    public update(arg0: byte[]): void
    public update(arg0: java.nio.ByteBuffer): void
    public digest(): byte[]
    public digest(arg0: byte[], arg1: int, arg2: int): int
    public digest(arg0: byte[]): byte[]
    public toString(): string
    public static isEqual(arg0: byte[], arg1: byte[]): boolean
    public reset(): void
    public getAlgorithm(): string
    public getDigestLength(): int
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}