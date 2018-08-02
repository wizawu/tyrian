declare namespace sun {
    namespace security {
        namespace jgss {
            namespace spi {
                interface GSSCredentialSpi {
                    getProvider(): java.security.Provider
                    dispose(): void
                    getName(): sun.security.jgss.spi.GSSNameSpi
                    getInitLifetime(): int
                    getAcceptLifetime(): int
                    isInitiatorCredential(): boolean
                    isAcceptorCredential(): boolean
                    getMechanism(): org.ietf.jgss.Oid
                    impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                }
            }
        }
    }
}