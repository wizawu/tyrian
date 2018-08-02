declare namespace java {
    namespace net {
class Inet4Address extends java.net.InetAddress {
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
    public getHostAddress(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

    }
}