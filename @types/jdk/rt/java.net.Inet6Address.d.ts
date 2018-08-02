declare namespace java {
    namespace net {
class Inet6Address extends java.net.InetAddress {
    public static getByAddress(arg0: java.lang.String | string, arg1: byte[], arg2: java.net.NetworkInterface): java.net.Inet6Address
    public static getByAddress(arg0: java.lang.String | string, arg1: byte[], arg2: int): java.net.Inet6Address
    public isMulticastAddress(): boolean
    public isAnyLocalAddress(): boolean
    public isLoopbackAddress(): boolean
    public isLinkLocalAddress(): boolean
    public isSiteLocalAddress(): boolean
    public isMCGlobal(): boolean
    public isMCNodeLocal(): boolean
    public isMCLinkLocal(): boolean
    public isMCSiteLocal(): boolean
    public isMCOrgLocal(): boolean
    public getAddress(): byte[]
    public getScopeId(): int
    public getScopedInterface(): java.net.NetworkInterface
    public getHostAddress(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public isIPv4CompatibleAddress(): boolean
    public static class: java.lang.Class<any>
}

    }
}