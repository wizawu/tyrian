declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class AuthorizationDataEntry implements java.lang.Cloneable {
                    public adType: int
                    public adData: byte[]
                    public constructor(arg0: int, arg1: byte[])
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public writeEntry(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}