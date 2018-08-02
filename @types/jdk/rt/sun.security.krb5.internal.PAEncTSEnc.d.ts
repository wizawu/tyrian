declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class PAEncTSEnc {
                    public pATimeStamp: sun.security.krb5.internal.KerberosTime
                    public pAUSec: java.lang.Integer
                    public constructor(arg0: sun.security.krb5.internal.KerberosTime, arg1: java.lang.Integer)
                    public constructor()
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}