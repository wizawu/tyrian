declare namespace java {
    namespace net {
class NetworkInterface {
    public getName(): string
    public getInetAddresses(): java.util.Enumeration<java.net.InetAddress>
    public getInterfaceAddresses(): java.util.List<java.net.InterfaceAddress>
    public getSubInterfaces(): java.util.Enumeration<java.net.NetworkInterface>
    public getParent(): java.net.NetworkInterface
    public getIndex(): int
    public getDisplayName(): string
    public static getByName(arg0: java.lang.String | string): java.net.NetworkInterface
    public static getByIndex(arg0: int): java.net.NetworkInterface
    public static getByInetAddress(arg0: java.net.InetAddress): java.net.NetworkInterface
    public static getNetworkInterfaces(): java.util.Enumeration<java.net.NetworkInterface>
    public isUp(): boolean
    public isLoopback(): boolean
    public isPointToPoint(): boolean
    public supportsMulticast(): boolean
    public getHardwareAddress(): byte[]
    public getMTU(): int
    public isVirtual(): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}