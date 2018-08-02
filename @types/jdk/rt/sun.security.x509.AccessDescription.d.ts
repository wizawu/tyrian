declare namespace sun {
    namespace security {
        namespace x509 {
class AccessDescription {
    public static Ad_OCSP_Id: sun.security.util.ObjectIdentifier
    public static Ad_CAISSUERS_Id: sun.security.util.ObjectIdentifier
    public static Ad_TIMESTAMPING_Id: sun.security.util.ObjectIdentifier
    public static Ad_CAREPOSITORY_Id: sun.security.util.ObjectIdentifier
    public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: sun.security.x509.GeneralName)
    public constructor(arg0: sun.security.util.DerValue)
    public getAccessMethod(): sun.security.util.ObjectIdentifier
    public getAccessLocation(): sun.security.x509.GeneralName
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}