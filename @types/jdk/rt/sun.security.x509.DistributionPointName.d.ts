declare namespace sun {
    namespace security {
        namespace x509 {
class DistributionPointName {
    public constructor(arg0: sun.security.x509.GeneralNames)
    public constructor(arg0: sun.security.x509.RDN)
    public constructor(arg0: sun.security.util.DerValue)
    public getFullName(): sun.security.x509.GeneralNames
    public getRelativeName(): sun.security.x509.RDN
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}