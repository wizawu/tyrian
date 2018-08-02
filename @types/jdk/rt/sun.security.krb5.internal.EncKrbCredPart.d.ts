declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class EncKrbCredPart {
    public ticketInfo: sun.security.krb5.internal.KrbCredInfo[]
    public timeStamp: sun.security.krb5.internal.KerberosTime
    public constructor(arg0: sun.security.krb5.internal.KrbCredInfo[], arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: java.lang.Integer, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddresses)
    public constructor(arg0: byte[])
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}