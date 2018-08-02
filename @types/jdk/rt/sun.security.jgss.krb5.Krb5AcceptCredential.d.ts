declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
class Krb5AcceptCredential implements sun.security.jgss.krb5.Krb5CredElement {
    public getName(): sun.security.jgss.spi.GSSNameSpi
    public getInitLifetime(): int
    public getAcceptLifetime(): int
    public isInitiatorCredential(): boolean
    public isAcceptorCredential(): boolean
    public getMechanism(): org.ietf.jgss.Oid
    public getProvider(): java.security.Provider
    public getKrb5EncryptionKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
    public dispose(): void
    public destroy(): void
    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
    public static class: java.lang.Class<any>
}

            }
        }
    }
}