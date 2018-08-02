declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class KDCReqBody {
    public kdcOptions: sun.security.krb5.internal.KDCOptions
    public cname: sun.security.krb5.PrincipalName
    public sname: sun.security.krb5.PrincipalName
    public from: sun.security.krb5.internal.KerberosTime
    public till: sun.security.krb5.internal.KerberosTime
    public rtime: sun.security.krb5.internal.KerberosTime
    public addresses: sun.security.krb5.internal.HostAddresses
    public constructor(arg0: sun.security.krb5.internal.KDCOptions, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: int, arg7: int[], arg8: sun.security.krb5.internal.HostAddresses, arg9: sun.security.krb5.EncryptedData, arg10: sun.security.krb5.internal.Ticket[])
    public constructor(arg0: sun.security.util.DerValue, arg1: int)
    public asn1Encode(arg0: int): byte[]
    public getNonce(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}