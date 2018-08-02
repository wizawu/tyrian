declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class EncAPRepPart {
    public ctime: sun.security.krb5.internal.KerberosTime
    public cusec: int
    public constructor(arg0: sun.security.krb5.internal.KerberosTime, arg1: int, arg2: sun.security.krb5.EncryptionKey, arg3: java.lang.Integer)
    public constructor(arg0: byte[])
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public getSubKey(): sun.security.krb5.EncryptionKey
    public getSeqNumber(): java.lang.Integer
    public static class: java.lang.Class<any>
}

            }
        }
    }
}