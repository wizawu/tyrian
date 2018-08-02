declare namespace javax {
    namespace security {
        namespace cert {
abstract class Certificate {
    public constructor()
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getEncoded(): byte[]
    public verify(arg0: java.security.PublicKey): void
    public verify(arg0: java.security.PublicKey, arg1: java.lang.String | string): void
    public toString(): string
    public getPublicKey(): java.security.PublicKey
    public static class: java.lang.Class<any>
}

        }
    }
}