declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class APReq {
                    public pvno: int
                    public msgType: int
                    public apOptions: sun.security.krb5.internal.APOptions
                    public ticket: sun.security.krb5.internal.Ticket
                    public authenticator: sun.security.krb5.EncryptedData
                    public constructor(arg0: sun.security.krb5.internal.APOptions, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}