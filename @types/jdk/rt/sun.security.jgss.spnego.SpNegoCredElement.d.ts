declare namespace sun {
    namespace security {
        namespace jgss {
            namespace spnego {
class SpNegoCredElement implements sun.security.jgss.spi.GSSCredentialSpi {
    public constructor(arg0: sun.security.jgss.spi.GSSCredentialSpi)
    public getInternalCred(): sun.security.jgss.spi.GSSCredentialSpi
    public getProvider(): java.security.Provider
    public dispose(): void
    public getName(): sun.security.jgss.spi.GSSNameSpi
    public getInitLifetime(): int
    public getAcceptLifetime(): int
    public isInitiatorCredential(): boolean
    public isAcceptorCredential(): boolean
    public getMechanism(): org.ietf.jgss.Oid
    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
    public static class: java.lang.Class<any>
}

            }
        }
    }
}