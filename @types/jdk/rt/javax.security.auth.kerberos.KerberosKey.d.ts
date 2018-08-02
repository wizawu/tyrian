declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                class KerberosKey implements javax.crypto.SecretKey , javax.security.auth.Destroyable {
                    public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: byte[], arg2: int, arg3: int)
                    public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: char[], arg2: java.lang.String | string)
                    public getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    public getVersionNumber(): int
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