declare namespace java {
    namespace net {
        abstract class AbstractPlainDatagramSocketImpl extends java.net.DatagramSocketImpl {
            protected connectedAddress: java.net.InetAddress
            protected create(): void
            protected bind(arg0: int, arg1: java.net.InetAddress): void
            protected abstract bind0(arg0: int, arg1: java.net.InetAddress): void
            protected abstract send(arg0: java.net.DatagramPacket): void
            protected connect(arg0: java.net.InetAddress, arg1: int): void
            protected disconnect(): void
            protected abstract peek(arg0: java.net.InetAddress): int
            protected abstract peekData(arg0: java.net.DatagramPacket): int
            protected receive(arg0: java.net.DatagramPacket): void
            protected abstract receive0(arg0: java.net.DatagramPacket): void
            protected abstract setTimeToLive(arg0: int): void
            protected abstract getTimeToLive(): int
            protected abstract setTTL(arg0: byte): void
            protected abstract getTTL(): byte
            protected join(arg0: java.net.InetAddress): void
            protected leave(arg0: java.net.InetAddress): void
            protected joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
            protected abstract join(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): void
            protected leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
            protected abstract leave(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): void
            protected close(): void
            protected isClosed(): boolean
            protected finalize(): void
            public setOption(arg0: int, arg1: java.lang.Object): void
            public getOption(arg0: int): java.lang.Object
            protected abstract datagramSocketCreate(): void
            protected abstract datagramSocketClose(): void
            protected abstract socketSetOption(arg0: int, arg1: java.lang.Object): void
            protected abstract socketGetOption(arg0: int): java.lang.Object
            protected abstract connect0(arg0: java.net.InetAddress, arg1: int): void
            protected abstract disconnect0(arg0: int): void
            protected nativeConnectDisabled(): boolean
            public static class: java.lang.Class<any>
        }
    }
}