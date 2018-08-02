declare namespace sun {
    namespace nio {
        namespace ch {
            class SocketChannelImpl extends java.nio.channels.SocketChannel implements sun.nio.ch.SelChImpl {
                public socket(): java.net.Socket
                public getLocalAddress(): java.net.SocketAddress
                public getRemoteAddress(): java.net.SocketAddress
                public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.SocketChannel
                public getOption<T>(arg0: java.net.SocketOption<T>): T
                public supportedOptions<T>(): java.util.Set<java.net.SocketOption<any>>
                public read<T>(arg0: java.nio.ByteBuffer): int
                public read<T>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public write<T>(arg0: java.nio.ByteBuffer): int
                public write<T>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                protected implConfigureBlocking<T>(arg0: boolean): void
                public localAddress<T>(): java.net.InetSocketAddress
                public remoteAddress<T>(): java.net.SocketAddress
                public bind<T>(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
                public isConnected<T>(): boolean
                public isConnectionPending<T>(): boolean
                public connect<T>(arg0: java.net.SocketAddress): boolean
                public finishConnect<T>(): boolean
                public shutdownInput<T>(): java.nio.channels.SocketChannel
                public shutdownOutput<T>(): java.nio.channels.SocketChannel
                public isInputOpen<T>(): boolean
                public isOutputOpen<T>(): boolean
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
                public bind<T>(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}