declare namespace java {
    namespace net {
abstract class SocketImpl implements java.net.SocketOptions {
    protected fd: java.io.FileDescriptor
    protected address: java.net.InetAddress
    protected port: int
    protected localport: int
    public constructor()
    protected create(arg0: boolean): void
    protected connect(arg0: java.lang.String | string, arg1: int): void
    protected connect(arg0: java.net.InetAddress, arg1: int): void
    protected connect(arg0: java.net.SocketAddress, arg1: int): void
    protected bind(arg0: java.net.InetAddress, arg1: int): void
    protected listen(arg0: int): void
    protected accept(arg0: java.net.SocketImpl): void
    protected getInputStream(): java.io.InputStream
    protected getOutputStream(): java.io.OutputStream
    protected available(): int
    protected close(): void
    protected shutdownInput(): void
    protected shutdownOutput(): void
    protected getFileDescriptor(): java.io.FileDescriptor
    protected getInetAddress(): java.net.InetAddress
    protected getPort(): int
    protected supportsUrgentData(): boolean
    protected sendUrgentData(arg0: int): void
    protected getLocalPort(): int
    public toString(): string
    protected setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
    public static class: java.lang.Class<any>
}

    }
}