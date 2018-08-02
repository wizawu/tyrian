declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class KDCReq {
    public reqBody: sun.security.krb5.internal.KDCReqBody
    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.internal.KDCReqBody, arg2: int)
    public constructor()
    public constructor(arg0: byte[], arg1: int)
    public constructor(arg0: sun.security.util.DerValue, arg1: int)
    protected init(arg0: sun.security.util.DerValue, arg1: int): void
    public asn1Encode(): byte[]
    public asn1EncodeReqBody(): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}