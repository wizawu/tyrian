declare namespace java {
    namespace net {
class InetAddress implements java.io.Serializable {
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
    public isReachable(arg0: int): boolean
    public isReachable(arg0: java.net.NetworkInterface, arg1: int, arg2: int): boolean
    public getHostName(): string
    public getCanonicalHostName(): string
    public getAddress(): byte[]
    public getHostAddress(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public toString(): string
    public static getByAddress(arg0: java.lang.String | string, arg1: byte[]): java.net.InetAddress
    public static getByName(arg0: java.lang.String | string): java.net.InetAddress
    public static getAllByName(arg0: java.lang.String | string): java.net.InetAddress[]
    public static getLoopbackAddress(): java.net.InetAddress
    public static getByAddress(arg0: byte[]): java.net.InetAddress
    public static getLocalHost(): java.net.InetAddress
    public static class: java.lang.Class<any>
}

    }
}