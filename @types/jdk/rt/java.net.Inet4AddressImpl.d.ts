declare namespace java {
    namespace net {
class Inet4AddressImpl implements java.net.InetAddressImpl {
    public getLocalHostName(): string
    public lookupAllHostAddr(arg0: java.lang.String | string): java.net.InetAddress[]
    public getHostByAddr(arg0: byte[]): string
    public anyLocalAddress(): java.net.InetAddress
    public loopbackAddress(): java.net.InetAddress
    public isReachable(arg0: java.net.InetAddress, arg1: int, arg2: java.net.NetworkInterface, arg3: int): boolean
    public static class: java.lang.Class<any>
}

    }
}