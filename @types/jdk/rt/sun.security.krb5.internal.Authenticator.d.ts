declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class Authenticator {
                    public authenticator_vno: int
                    public cname: sun.security.krb5.PrincipalName
                    public cusec: int
                    public ctime: sun.security.krb5.internal.KerberosTime
                    public authorizationData: sun.security.krb5.internal.AuthorizationData
                    public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Checksum, arg2: int, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.EncryptionKey, arg5: java.lang.Integer, arg6: sun.security.krb5.internal.AuthorizationData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public getChecksum(): sun.security.krb5.Checksum
                    public getSeqNumber(): java.lang.Integer
                    public getSubKey(): sun.security.krb5.EncryptionKey
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}