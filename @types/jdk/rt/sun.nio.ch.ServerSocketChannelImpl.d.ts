declare namespace sun {
    namespace nio {
        namespace ch {
class ServerSocketChannelImpl extends java.nio.channels.ServerSocketChannel implements sun.nio.ch.SelChImpl {
    public socket(): java.net.ServerSocket
    public getLocalAddress(): java.net.SocketAddress
    public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.ServerSocketChannel
    public getOption<T>(arg0: java.net.SocketOption<T>): T
    public supportedOptions<T>(): java.util.Set<java.net.SocketOption<any>>
    public isBound<T>(): boolean
    public localAddress<T>(): java.net.InetSocketAddress
    public bind<T>(arg0: java.net.SocketAddress, arg1: int): java.nio.channels.ServerSocketChannel
    public accept<T>(): java.nio.channels.SocketChannel
    protected implConfigureBlocking<T>(arg0: boolean): void
    protected implCloseSelectableChannel<T>(): void
    public kill<T>(): void
    public translateReadyOps<T>(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndUpdateReadyOps<T>(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndSetReadyOps<T>(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndSetInterestOps<T>(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
    public getFD<T>(): java.io.FileDescriptor
    public getFDVal<T>(): int
    public toString<T>(): string
    public setOption<T>(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
    public static class: java.lang.Class<any>
}

        }
    }
}