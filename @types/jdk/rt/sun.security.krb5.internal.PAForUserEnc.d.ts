declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class PAForUserEnc {
                    public readonly name: sun.security.krb5.PrincipalName
                    public static readonly AUTH_PACKAGE: string
                    public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.EncryptionKey)
                    public constructor(arg0: sun.security.util.DerValue, arg1: sun.security.krb5.EncryptionKey)
                    public asn1Encode(): byte[]
                    public getS4UByteArray(): byte[]
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}