declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
class Krb5ProxyCredential implements sun.security.jgss.krb5.Krb5CredElement {
    public self: sun.security.jgss.krb5.Krb5InitCredential
    public tkt: sun.security.krb5.internal.Ticket
    public getName(): sun.security.jgss.krb5.Krb5NameElement
    public getInitLifetime(): int
    public getAcceptLifetime(): int
    public isInitiatorCredential(): boolean
    public isAcceptorCredential(): boolean
    public getMechanism(): org.ietf.jgss.Oid
    public getProvider(): java.security.Provider
    public dispose(): void
    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
    public getName(): sun.security.jgss.spi.GSSNameSpi
    public static class: java.lang.Class<any>
}

            }
        }
    }
}