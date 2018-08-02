declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class Ticket implements java.lang.Cloneable {
                    public tkt_vno: int
                    public sname: sun.security.krb5.PrincipalName
                    public encPart: sun.security.krb5.EncryptedData
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.Ticket
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}