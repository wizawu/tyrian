declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class EncTicketPart {
                    public flags: sun.security.krb5.internal.TicketFlags
                    public key: sun.security.krb5.EncryptionKey
                    public cname: sun.security.krb5.PrincipalName
                    public transited: sun.security.krb5.internal.TransitedEncoding
                    public authtime: sun.security.krb5.internal.KerberosTime
                    public starttime: sun.security.krb5.internal.KerberosTime
                    public endtime: sun.security.krb5.internal.KerberosTime
                    public renewTill: sun.security.krb5.internal.KerberosTime
                    public caddr: sun.security.krb5.internal.HostAddresses
                    public authorizationData: sun.security.krb5.internal.AuthorizationData
                    public constructor(arg0: sun.security.krb5.internal.TicketFlags, arg1: sun.security.krb5.EncryptionKey, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.internal.TransitedEncoding, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.HostAddresses, arg9: sun.security.krb5.internal.AuthorizationData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}