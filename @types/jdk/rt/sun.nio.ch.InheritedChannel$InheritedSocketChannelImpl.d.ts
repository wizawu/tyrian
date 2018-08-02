declare namespace sun {
    namespace nio {
        namespace ch {
class InheritedChannel$InheritedSocketChannelImpl extends sun.nio.ch.SocketChannelImpl {
    protected implCloseSelectableChannel(): void
    public toString(): string
    public getFDVal(): int
    public getFD(): java.io.FileDescriptor
    public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
    public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateReadyOps(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
    public kill(): void
    public isOutputOpen(): boolean
    public isInputOpen(): boolean
    public shutdownOutput(): java.nio.channels.SocketChannel
    public shutdownInput(): java.nio.channels.SocketChannel
    public finishConnect(): boolean
    public connect(arg0: java.net.SocketAddress): boolean
    public isConnectionPending(): boolean
    public isConnected(): boolean
    public bind(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
    public remoteAddress(): java.net.SocketAddress
    public localAddress(): java.net.InetSocketAddress
    public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    public write(arg0: java.nio.ByteBuffer): int
    public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    public read(arg0: java.nio.ByteBuffer): int
    public getOption(arg0: java.net.SocketOption): java.lang.Object
    public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.SocketChannel
    public getRemoteAddress(): java.net.SocketAddress
    public getLocalAddress(): java.net.SocketAddress
    public socket(): java.net.Socket
    public static class: java.lang.Class<any>
}

        }
    }
}