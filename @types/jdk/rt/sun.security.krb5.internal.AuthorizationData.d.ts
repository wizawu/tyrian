declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class AuthorizationData implements java.lang.Cloneable {
    public constructor(arg0: sun.security.krb5.internal.AuthorizationDataEntry[])
    public constructor(arg0: sun.security.krb5.internal.AuthorizationDataEntry)
    public clone(): java.lang.Object
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.AuthorizationData
    public writeAuth(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
    public toString(): string
    public count(): int
    public item(arg0: int): sun.security.krb5.internal.AuthorizationDataEntry
    public static class: java.lang.Class<any>
}

            }
        }
    }
}