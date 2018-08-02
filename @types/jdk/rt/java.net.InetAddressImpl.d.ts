declare namespace java {
    namespace net {
interface InetAddressImpl {
    getLocalHostName(): string
    lookupAllHostAddr(arg0: java.lang.String | string): java.net.InetAddress[]
    getHostByAddr(arg0: byte[]): string
    anyLocalAddress(): java.net.InetAddress
    loopbackAddress(): java.net.InetAddress
    isReachable(arg0: java.net.InetAddress, arg1: int, arg2: java.net.NetworkInterface, arg3: int): boolean
}

    }
}