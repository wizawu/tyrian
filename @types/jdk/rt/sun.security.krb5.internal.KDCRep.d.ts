declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class KDCRep {
                    public cname: sun.security.krb5.PrincipalName
                    public ticket: sun.security.krb5.internal.Ticket
                    public encPart: sun.security.krb5.EncryptedData
                    public encKDCRepPart: sun.security.krb5.internal.EncKDCRepPart
                    public pAData: sun.security.krb5.internal.PAData[]
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.Ticket, arg3: sun.security.krb5.EncryptedData, arg4: int)
                    public constructor()
                    public constructor(arg0: byte[], arg1: int)
                    public constructor(arg0: sun.security.util.DerValue, arg1: int)
                    protected init(arg0: sun.security.util.DerValue, arg1: int): void
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}