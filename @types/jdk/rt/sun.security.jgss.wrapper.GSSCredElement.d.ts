declare namespace sun {
    namespace security {
        namespace jgss {
            namespace wrapper {
class GSSCredElement implements sun.security.jgss.spi.GSSCredentialSpi {
    public getProvider(): java.security.Provider
    public dispose(): void
    public getName(): sun.security.jgss.wrapper.GSSNameElement
    public getInitLifetime(): int
    public getAcceptLifetime(): int
    public isInitiatorCredential(): boolean
    public isAcceptorCredential(): boolean
    public getMechanism(): org.ietf.jgss.Oid
    public toString(): string
    protected finalize(): void
    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
    public getName(): sun.security.jgss.spi.GSSNameSpi
    public static class: java.lang.Class<any>
}

            }
        }
    }
}