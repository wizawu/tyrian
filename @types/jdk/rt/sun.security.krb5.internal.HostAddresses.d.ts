declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class HostAddresses implements java.lang.Cloneable {
                    public constructor(arg0: sun.security.krb5.internal.HostAddress[])
                    public constructor()
                    public constructor(arg0: sun.security.krb5.PrincipalName)
                    public clone(): java.lang.Object
                    public inList(arg0: sun.security.krb5.internal.HostAddress): boolean
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.HostAddresses
                    public writeAddrs(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                    public getInetAddresses(): java.net.InetAddress[]
                    public static getLocalAddresses(): sun.security.krb5.internal.HostAddresses
                    public constructor(arg0: java.net.InetAddress[])
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}