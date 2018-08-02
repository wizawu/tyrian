declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class KRBSafe {
    public pvno: int
    public msgType: int
    public safeBody: sun.security.krb5.internal.KRBSafeBody
    public cksum: sun.security.krb5.Checksum
    public constructor(arg0: sun.security.krb5.internal.KRBSafeBody, arg1: sun.security.krb5.Checksum)
    public constructor(arg0: byte[])
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}