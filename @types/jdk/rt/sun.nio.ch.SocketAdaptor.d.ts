declare namespace sun {
    namespace nio {
        namespace ch {
class SocketAdaptor extends java.net.Socket {
    public static create(arg0: sun.nio.ch.SocketChannelImpl): java.net.Socket
    public getChannel(): java.nio.channels.SocketChannel
    public connect(arg0: java.net.SocketAddress): void
    public connect(arg0: java.net.SocketAddress, arg1: int): void
    public bind(arg0: java.net.SocketAddress): void
    public getInetAddress(): java.net.InetAddress
    public getLocalAddress(): java.net.InetAddress
    public getPort(): int
    public getLocalPort(): int
    public getInputStream(): java.io.InputStream
    public getOutputStream(): java.io.OutputStream
    public setTcpNoDelay(arg0: boolean): void
    public getTcpNoDelay(): boolean
    public setSoLinger(arg0: boolean, arg1: int): void
    public getSoLinger(): int
    public sendUrgentData(arg0: int): void
    public setOOBInline(arg0: boolean): void
    public getOOBInline(): boolean
    public setSoTimeout(arg0: int): void
    public getSoTimeout(): int
    public setSendBufferSize(arg0: int): void
    public getSendBufferSize(): int
    public setReceiveBufferSize(arg0: int): void
    public getReceiveBufferSize(): int
    public setKeepAlive(arg0: boolean): void
    public getKeepAlive(): boolean
    public setTrafficClass(arg0: int): void
    public getTrafficClass(): int
    public setReuseAddress(arg0: boolean): void
    public getReuseAddress(): boolean
    public close(): void
    public shutdownInput(): void
    public shutdownOutput(): void
    public toString(): string
    public isConnected(): boolean
    public isBound(): boolean
    public isClosed(): boolean
    public isInputShutdown(): boolean
    public isOutputShutdown(): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}