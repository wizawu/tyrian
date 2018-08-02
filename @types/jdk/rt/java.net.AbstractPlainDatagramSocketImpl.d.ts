declare namespace java {
    namespace net {
        abstract class AbstractPlainDatagramSocketImpl extends java.net.DatagramSocketImpl {
            protected connectedAddress: java.net.InetAddress
            protected create(): void
            protected bind(arg0: int, arg1: java.net.InetAddress): void
            protected bind0(arg0: int, arg1: java.net.InetAddress): void
            protected send(arg0: java.net.DatagramPacket): void
            protected connect(arg0: java.net.InetAddress, arg1: int): void
            protected disconnect(): void
            protected peek(arg0: java.net.InetAddress): int
            protected peekData(arg0: java.net.DatagramPacket): int
            protected receive(arg0: java.net.DatagramPacket): void
            protected receive0(arg0: java.net.DatagramPacket): void
            protected setTimeToLive(arg0: int): void
            protected getTimeToLive(): int
            protected setTTL(arg0: byte): void
            protected getTTL(): byte
            protected join(arg0: java.net.InetAddress): void
            protected leave(arg0: java.net.InetAddress): void
            protected joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
            protected join(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): void
            protected leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
            protected leave(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): void
            protected close(): void
            protected isClosed(): boolean
            protected finalize(): void
            public setOption(arg0: int, arg1: java.lang.Object): void
            public getOption(arg0: int): java.lang.Object
            protected datagramSocketCreate(): void
            protected datagramSocketClose(): void
            protected socketSetOption(arg0: int, arg1: java.lang.Object): void
            protected socketGetOption(arg0: int): java.lang.Object
            protected connect0(arg0: java.net.InetAddress, arg1: int): void
            protected disconnect0(arg0: int): void
            protected nativeConnectDisabled(): boolean
            public static class: java.lang.Class<any>
        }
    }
}