declare namespace java {
    namespace net {
class DatagramPacket {
    public constructor(arg0: byte[], arg1: int, arg2: int)
    public constructor(arg0: byte[], arg1: int)
    public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.net.InetAddress, arg4: int)
    public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.net.SocketAddress)
    public constructor(arg0: byte[], arg1: int, arg2: java.net.InetAddress, arg3: int)
    public constructor(arg0: byte[], arg1: int, arg2: java.net.SocketAddress)
    public getAddress(): java.net.InetAddress
    public getPort(): int
    public getData(): byte[]
    public getOffset(): int
    public getLength(): int
    public setData(arg0: byte[], arg1: int, arg2: int): void
    public setAddress(arg0: java.net.InetAddress): void
    public setPort(arg0: int): void
    public setSocketAddress(arg0: java.net.SocketAddress): void
    public getSocketAddress(): java.net.SocketAddress
    public setData(arg0: byte[]): void
    public setLength(arg0: int): void
    public static class: java.lang.Class<any>
}

    }
}