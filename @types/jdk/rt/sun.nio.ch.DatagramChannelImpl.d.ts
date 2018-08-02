declare namespace sun {
    namespace nio {
        namespace ch {
class DatagramChannelImpl extends java.nio.channels.DatagramChannel implements sun.nio.ch.SelChImpl {
    public constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public constructor(arg0: java.nio.channels.spi.SelectorProvider, arg1: java.net.ProtocolFamily | java.net.ProtocolFamily$$Lambda)
    public constructor(arg0: java.nio.channels.spi.SelectorProvider, arg1: java.io.FileDescriptor)
    public socket(): java.net.DatagramSocket
    public getLocalAddress(): java.net.SocketAddress
    public getRemoteAddress(): java.net.SocketAddress
    public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.DatagramChannel
    public getOption<T>(arg0: java.net.SocketOption<T>): T
    public supportedOptions<T>(): java.util.Set<java.net.SocketOption<any>>
    public receive<T>(arg0: java.nio.ByteBuffer): java.net.SocketAddress
    public send<T>(arg0: java.nio.ByteBuffer, arg1: java.net.SocketAddress): int
    public read<T>(arg0: java.nio.ByteBuffer): int
    public read<T>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    public write<T>(arg0: java.nio.ByteBuffer): int
    public write<T>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    protected implConfigureBlocking<T>(arg0: boolean): void
    public localAddress<T>(): java.net.SocketAddress
    public remoteAddress<T>(): java.net.SocketAddress
    public bind<T>(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
    public isConnected<T>(): boolean
    public connect<T>(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
    public disconnect<T>(): java.nio.channels.DatagramChannel
    public join<T>(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): java.nio.channels.MembershipKey
    public join<T>(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface, arg2: java.net.InetAddress): java.nio.channels.MembershipKey
    protected implCloseSelectableChannel<T>(): void
    public kill<T>(): void
    protected finalize<T>(): void
    public translateReadyOps<T>(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndUpdateReadyOps<T>(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndSetReadyOps<T>(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndSetInterestOps<T>(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
    public getFD<T>(): java.io.FileDescriptor
    public getFDVal<T>(): int
    public setOption<T>(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
    public bind<T>(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
    public static class: java.lang.Class<any>
}

        }
    }
}