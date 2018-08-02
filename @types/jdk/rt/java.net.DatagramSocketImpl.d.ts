declare namespace java {
    namespace net {
abstract class DatagramSocketImpl implements java.net.SocketOptions {
    protected localPort: int
    protected fd: java.io.FileDescriptor
    public constructor()
    protected create(): void
    protected bind(arg0: int, arg1: java.net.InetAddress): void
    protected send(arg0: java.net.DatagramPacket): void
    protected connect(arg0: java.net.InetAddress, arg1: int): void
    protected disconnect(): void
    protected peek(arg0: java.net.InetAddress): int
    protected peekData(arg0: java.net.DatagramPacket): int
    protected receive(arg0: java.net.DatagramPacket): void
    protected setTTL(arg0: byte): void
    protected getTTL(): byte
    protected setTimeToLive(arg0: int): void
    protected getTimeToLive(): int
    protected join(arg0: java.net.InetAddress): void
    protected leave(arg0: java.net.InetAddress): void
    protected joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
    protected leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
    protected close(): void
    protected getLocalPort(): int
    protected getFileDescriptor(): java.io.FileDescriptor
    public static class: java.lang.Class<any>
}

    }
}