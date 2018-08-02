declare namespace java {
    namespace net {
        class PlainDatagramSocketImpl extends java.net.AbstractPlainDatagramSocketImpl {
            protected setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): void
            protected getOption<T>(arg0: java.net.SocketOption<T>): T
            protected socketSetOption<T>(arg0: int, arg1: java.lang.Object): void
            protected bind0<T>(arg0: int, arg1: java.net.InetAddress): void
            protected send<T>(arg0: java.net.DatagramPacket): void
            protected peek<T>(arg0: java.net.InetAddress): int
            protected peekData<T>(arg0: java.net.DatagramPacket): int
            protected receive0<T>(arg0: java.net.DatagramPacket): void
            protected setTimeToLive<T>(arg0: int): void
            protected getTimeToLive<T>(): int
            protected setTTL<T>(arg0: byte): void
            protected getTTL<T>(): byte
            protected join<T>(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): void
            protected leave<T>(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): void
            protected datagramSocketCreate<T>(): void
            protected datagramSocketClose<T>(): void
            protected socketSetOption0<T>(arg0: int, arg1: java.lang.Object): void
            protected socketGetOption<T>(arg0: int): java.lang.Object
            protected connect0<T>(arg0: java.net.InetAddress, arg1: int): void
            protected disconnect0<T>(arg0: int): void
            public static class: java.lang.Class<any>
        }
    }
}