declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class KrbCredInfo {
    public key: sun.security.krb5.EncryptionKey
    public pname: sun.security.krb5.PrincipalName
    public flags: sun.security.krb5.internal.TicketFlags
    public authtime: sun.security.krb5.internal.KerberosTime
    public starttime: sun.security.krb5.internal.KerberosTime
    public endtime: sun.security.krb5.internal.KerberosTime
    public renewTill: sun.security.krb5.internal.KerberosTime
    public sname: sun.security.krb5.PrincipalName
    public caddr: sun.security.krb5.internal.HostAddresses
    public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.TicketFlags, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.PrincipalName, arg8: sun.security.krb5.internal.HostAddresses)
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}