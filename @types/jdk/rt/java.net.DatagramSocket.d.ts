declare namespace java {
    namespace net {
class DatagramSocket implements java.io.Closeable {
    public constructor()
    protected constructor(arg0: java.net.DatagramSocketImpl)
    public constructor(arg0: java.net.SocketAddress)
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: java.net.InetAddress)
    public bind(arg0: java.net.SocketAddress): void
    public connect(arg0: java.net.InetAddress, arg1: int): void
    public connect(arg0: java.net.SocketAddress): void
    public disconnect(): void
    public isBound(): boolean
    public isConnected(): boolean
    public getInetAddress(): java.net.InetAddress
    public getPort(): int
    public getRemoteSocketAddress(): java.net.SocketAddress
    public getLocalSocketAddress(): java.net.SocketAddress
    public send(arg0: java.net.DatagramPacket): void
    public receive(arg0: java.net.DatagramPacket): void
    public getLocalAddress(): java.net.InetAddress
    public getLocalPort(): int
    public setSoTimeout(arg0: int): void
    public getSoTimeout(): int
    public setSendBufferSize(arg0: int): void
    public getSendBufferSize(): int
    public setReceiveBufferSize(arg0: int): void
    public getReceiveBufferSize(): int
    public setReuseAddress(arg0: boolean): void
    public getReuseAddress(): boolean
    public setBroadcast(arg0: boolean): void
    public getBroadcast(): boolean
    public setTrafficClass(arg0: int): void
    public getTrafficClass(): int
    public close(): void
    public isClosed(): boolean
    public getChannel(): java.nio.channels.DatagramChannel
    public static setDatagramSocketImplFactory(arg0: java.net.DatagramSocketImplFactory | java.net.DatagramSocketImplFactory$$Lambda): void
    public static class: java.lang.Class<any>
}

    }
}