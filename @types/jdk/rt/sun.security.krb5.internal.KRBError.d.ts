declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class KRBError implements java.io.Serializable {
                    public constructor(arg0: sun.security.krb5.internal.APOptions, arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: sun.security.krb5.internal.KerberosTime, arg4: java.lang.Integer, arg5: int, arg6: sun.security.krb5.PrincipalName, arg7: sun.security.krb5.PrincipalName, arg8: java.lang.String | string, arg9: byte[])
                    public constructor(arg0: sun.security.krb5.internal.APOptions, arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: sun.security.krb5.internal.KerberosTime, arg4: java.lang.Integer, arg5: int, arg6: sun.security.krb5.PrincipalName, arg7: sun.security.krb5.PrincipalName, arg8: java.lang.String | string, arg9: byte[], arg10: sun.security.krb5.Checksum)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public getServerTime(): sun.security.krb5.internal.KerberosTime
                    public getClientTime(): sun.security.krb5.internal.KerberosTime
                    public getServerMicroSeconds(): java.lang.Integer
                    public getClientMicroSeconds(): java.lang.Integer
                    public getErrorCode(): int
                    public getPA(): sun.security.krb5.internal.PAData[]
                    public getErrorString(): string
                    public asn1Encode(): byte[]
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}