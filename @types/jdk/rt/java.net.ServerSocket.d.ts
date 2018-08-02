declare namespace java {
    namespace net {
class ServerSocket implements java.io.Closeable {
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: int, arg1: int, arg2: java.net.InetAddress)
    public bind(arg0: java.net.SocketAddress): void
    public bind(arg0: java.net.SocketAddress, arg1: int): void
    public getInetAddress(): java.net.InetAddress
    public getLocalPort(): int
    public getLocalSocketAddress(): java.net.SocketAddress
    public accept(): java.net.Socket
    protected implAccept(arg0: java.net.Socket): void
    public close(): void
    public getChannel(): java.nio.channels.ServerSocketChannel
    public isBound(): boolean
    public isClosed(): boolean
    public setSoTimeout(arg0: int): void
    public getSoTimeout(): int
    public setReuseAddress(arg0: boolean): void
    public getReuseAddress(): boolean
    public toString(): string
    public static setSocketFactory(arg0: java.net.SocketImplFactory | java.net.SocketImplFactory$$Lambda): void
    public setReceiveBufferSize(arg0: int): void
    public getReceiveBufferSize(): int
    public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
    public static class: java.lang.Class<any>
}

    }
}