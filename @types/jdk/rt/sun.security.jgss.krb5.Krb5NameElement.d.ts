declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
class Krb5NameElement implements sun.security.jgss.spi.GSSNameSpi {
    public getKrb5PrincipalName(): sun.security.krb5.PrincipalName
    public equals(arg0: sun.security.jgss.spi.GSSNameSpi): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public export(): byte[]
    public getMechanism(): org.ietf.jgss.Oid
    public toString(): string
    public getGSSNameType(): org.ietf.jgss.Oid
    public getStringNameType(): org.ietf.jgss.Oid
    public isAnonymousName(): boolean
    public getProvider(): java.security.Provider
    public static class: java.lang.Class<any>
}

            }
        }
    }
}