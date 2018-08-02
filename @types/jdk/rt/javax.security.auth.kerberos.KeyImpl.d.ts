declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
class KeyImpl implements javax.crypto.SecretKey , javax.security.auth.Destroyable , java.io.Serializable {
    public constructor(arg0: byte[], arg1: int)
    public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: char[], arg2: java.lang.String | string)
    public getKeyType(): int
    public getAlgorithm(): string
    public getFormat(): string
    public getEncoded(): byte[]
    public destroy(): void
    public isDestroyed(): boolean
    public toString(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}