declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class TransitedEncoding {
    public trType: int
    public contents: byte[]
    public constructor(arg0: int, arg1: byte[])
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.TransitedEncoding
    public static class: java.lang.Class<any>
}

            }
        }
    }
}