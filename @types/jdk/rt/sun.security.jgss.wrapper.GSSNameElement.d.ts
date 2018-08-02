declare namespace sun {
    namespace security {
        namespace jgss {
            namespace wrapper {
class GSSNameElement implements sun.security.jgss.spi.GSSNameSpi {
    public getKrbName(): string
    public getProvider(): java.security.Provider
    public equals(arg0: sun.security.jgss.spi.GSSNameSpi): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public export(): byte[]
    public getMechanism(): org.ietf.jgss.Oid
    public toString(): string
    public getStringNameType(): org.ietf.jgss.Oid
    public isAnonymousName(): boolean
    public dispose(): void
    protected finalize(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}