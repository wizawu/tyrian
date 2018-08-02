declare namespace sun {
    namespace security {
        namespace jgss {
class GSSNameImpl implements org.ietf.jgss.GSSName {
    public canonicalize(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
    public equals(arg0: org.ietf.jgss.GSSName): boolean
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public export(): byte[]
    public toString(): string
    public getStringNameType(): org.ietf.jgss.Oid
    public isAnonymous(): boolean
    public isMN(): boolean
    public getElement(arg0: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
    public static class: java.lang.Class<any>
}

        }
    }
}