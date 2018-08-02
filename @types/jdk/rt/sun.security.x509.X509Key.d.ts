declare namespace sun {
    namespace security {
        namespace x509 {
class X509Key implements java.security.PublicKey {
    protected algid: sun.security.x509.AlgorithmId
    protected key: byte[]
    protected encodedKey: byte[]
    public constructor()
    protected setKey(arg0: sun.security.util.BitArray): void
    protected getKey(): sun.security.util.BitArray
    public static parse(arg0: sun.security.util.DerValue): java.security.PublicKey
    protected parseKeyBits(): void
    public getAlgorithm(): string
    public getAlgorithmId(): sun.security.x509.AlgorithmId
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public getEncoded(): byte[]
    public getEncodedInternal(): byte[]
    public getFormat(): string
    public encode(): byte[]
    public toString(): string
    public decode(arg0: java.io.InputStream): void
    public decode(arg0: byte[]): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}