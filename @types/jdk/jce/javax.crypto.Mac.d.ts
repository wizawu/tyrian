declare namespace javax {
    namespace crypto {
class Mac implements java.lang.Cloneable {
    protected constructor(arg0: javax.crypto.MacSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
    public getAlgorithm(): string
    public static getInstance(arg0: java.lang.String | string): javax.crypto.Mac
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.crypto.Mac
    public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.crypto.Mac
    public getProvider(): java.security.Provider
    public getMacLength(): int
    public init(arg0: java.security.Key): void
    public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
    public update(arg0: byte): void
    public update(arg0: byte[]): void
    public update(arg0: byte[], arg1: int, arg2: int): void
    public update(arg0: java.nio.ByteBuffer): void
    public doFinal(): byte[]
    public doFinal(arg0: byte[], arg1: int): void
    public doFinal(arg0: byte[]): byte[]
    public reset(): void
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}