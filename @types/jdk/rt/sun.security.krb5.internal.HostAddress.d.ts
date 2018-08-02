declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class HostAddress implements java.lang.Cloneable {
    public clone(): java.lang.Object
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public getInetAddress(): java.net.InetAddress
    public constructor()
    public constructor(arg0: int, arg1: byte[])
    public constructor(arg0: java.net.InetAddress)
    public constructor(arg0: sun.security.util.DerValue)
    public asn1Encode(): byte[]
    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.HostAddress
    public static class: java.lang.Class<any>
}

            }
        }
    }
}