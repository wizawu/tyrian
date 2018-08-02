declare namespace sun {
    namespace security {
        namespace jgss {
            namespace spi {
interface GSSNameSpi {
    getProvider(): java.security.Provider
    equals(arg0: sun.security.jgss.spi.GSSNameSpi): boolean
    equals(arg0: java.lang.Object): boolean
    hashCode(): int
    export(): byte[]
    getMechanism(): org.ietf.jgss.Oid
    toString(): string
    getStringNameType(): org.ietf.jgss.Oid
    isAnonymousName(): boolean
}

            }
        }
    }
}