declare namespace sun {
    namespace nio {
        namespace ch {
class InheritedChannel$InheritedServerSocketChannelImpl extends sun.nio.ch.ServerSocketChannelImpl {
    protected implCloseSelectableChannel(): void
    public toString(): string
    public getFDVal(): int
    public getFD(): java.io.FileDescriptor
    public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
    public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateReadyOps(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
    public kill(): void
    public accept(): java.nio.channels.SocketChannel
    public bind(arg0: java.net.SocketAddress, arg1: int): java.nio.channels.ServerSocketChannel
    public localAddress(): java.net.InetSocketAddress
    public isBound(): boolean
    public getOption(arg0: java.net.SocketOption): java.lang.Object
    public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.ServerSocketChannel
    public getLocalAddress(): java.net.SocketAddress
    public socket(): java.net.ServerSocket
    public static class: java.lang.Class<any>
}

        }
    }
}