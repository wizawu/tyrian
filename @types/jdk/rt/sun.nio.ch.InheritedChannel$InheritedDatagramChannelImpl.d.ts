declare namespace sun {
    namespace nio {
        namespace ch {
            class InheritedChannel$InheritedDatagramChannelImpl extends sun.nio.ch.DatagramChannelImpl {
                protected implCloseSelectableChannel(): void
                public getFDVal(): int
                public getFD(): java.io.FileDescriptor
                public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
                public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                public translateReadyOps(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
                public kill(): void
                public join(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface, arg2: java.net.InetAddress): java.nio.channels.MembershipKey
                public join(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): java.nio.channels.MembershipKey
                public disconnect(): java.nio.channels.DatagramChannel
                public connect(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
                public isConnected(): boolean
                public bind(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
                public remoteAddress(): java.net.SocketAddress
                public localAddress(): java.net.SocketAddress
                public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public write(arg0: java.nio.ByteBuffer): int
                public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public read(arg0: java.nio.ByteBuffer): int
                public send(arg0: java.nio.ByteBuffer, arg1: java.net.SocketAddress): int
                public receive(arg0: java.nio.ByteBuffer): java.net.SocketAddress
                public getOption(arg0: java.net.SocketOption): java.lang.Object
                public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.DatagramChannel
                public getRemoteAddress(): java.net.SocketAddress
                public getLocalAddress(): java.net.SocketAddress
                public socket(): java.net.DatagramSocket
                public static class: java.lang.Class<any>
            }
        }
    }
}