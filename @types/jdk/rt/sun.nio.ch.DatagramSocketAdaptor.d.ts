declare namespace sun {
    namespace nio {
        namespace ch {
class DatagramSocketAdaptor extends java.net.DatagramSocket {
    public static create(arg0: sun.nio.ch.DatagramChannelImpl): java.net.DatagramSocket
    public bind(arg0: java.net.SocketAddress): void
    public connect(arg0: java.net.InetAddress, arg1: int): void
    public connect(arg0: java.net.SocketAddress): void
    public disconnect(): void
    public isBound(): boolean
    public isConnected(): boolean
    public getInetAddress(): java.net.InetAddress
    public getPort(): int
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
    public static class: java.lang.Class<any>
}

        }
    }
}