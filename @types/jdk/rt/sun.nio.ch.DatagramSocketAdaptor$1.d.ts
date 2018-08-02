declare namespace sun {
    namespace nio {
        namespace ch {
            class DatagramSocketAdaptor$1 extends java.net.DatagramSocketImpl {
                protected create(): void
                protected bind(arg0: int, arg1: java.net.InetAddress): void
                protected send(arg0: java.net.DatagramPacket): void
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
                public getOption(arg0: int): java.lang.Object
                public setOption(arg0: int, arg1: java.lang.Object): void
                public static class: java.lang.Class<any>
            }
        }
    }
}