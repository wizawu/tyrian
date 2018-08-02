declare namespace java {
    namespace net {
        class MulticastSocket extends java.net.DatagramSocket {
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: java.net.SocketAddress)
            public setTTL(arg0: byte): void
            public setTimeToLive(arg0: int): void
            public getTTL(): byte
            public getTimeToLive(): int
            public joinGroup(arg0: java.net.InetAddress): void
            public leaveGroup(arg0: java.net.InetAddress): void
            public joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
            public leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
            public setInterface(arg0: java.net.InetAddress): void
            public getInterface(): java.net.InetAddress
            public setNetworkInterface(arg0: java.net.NetworkInterface): void
            public getNetworkInterface(): java.net.NetworkInterface
            public setLoopbackMode(arg0: boolean): void
            public getLoopbackMode(): boolean
            public send(arg0: java.net.DatagramPacket, arg1: byte): void
            public static class: java.lang.Class<any>
        }
    }
}