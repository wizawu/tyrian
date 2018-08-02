declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class KRBCred {
    public tickets: sun.security.krb5.internal.Ticket[]
    public encPart: sun.security.krb5.EncryptedData
    public constructor(arg0: sun.security.krb5.internal.Ticket[], arg1: sun.security.krb5.EncryptedData)
    public constructor(arg0: byte[])
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}