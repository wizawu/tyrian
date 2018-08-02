declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class EncKDCRepPart {
                    public key: sun.security.krb5.EncryptionKey
                    public lastReq: sun.security.krb5.internal.LastReq
                    public nonce: int
                    public keyExpiration: sun.security.krb5.internal.KerberosTime
                    public flags: sun.security.krb5.internal.TicketFlags
                    public authtime: sun.security.krb5.internal.KerberosTime
                    public starttime: sun.security.krb5.internal.KerberosTime
                    public endtime: sun.security.krb5.internal.KerberosTime
                    public renewTill: sun.security.krb5.internal.KerberosTime
                    public sname: sun.security.krb5.PrincipalName
                    public caddr: sun.security.krb5.internal.HostAddresses
                    public msgType: int
                    public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.internal.LastReq, arg2: int, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.PrincipalName, arg10: sun.security.krb5.internal.HostAddresses, arg11: int)
                    public constructor()
                    public constructor(arg0: byte[], arg1: int)
                    public constructor(arg0: sun.security.util.DerValue, arg1: int)
                    protected init(arg0: sun.security.util.DerValue, arg1: int): void
                    public asn1Encode(arg0: int): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}