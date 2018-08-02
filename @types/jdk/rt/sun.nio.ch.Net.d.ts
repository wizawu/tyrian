declare namespace sun {
    namespace nio {
        namespace ch {
            class Net {
                public static SHUT_RD: int
                public static SHUT_WR: int
                public static SHUT_RDWR: int
                public static POLLIN: short
                public static POLLOUT: short
                public static POLLERR: short
                public static POLLHUP: short
                public static POLLNVAL: short
                public static POLLCONN: short
                public static checkAddress(arg0: java.net.SocketAddress): java.net.InetSocketAddress
                public static isFastTcpLoopbackRequested(): boolean
                public static bind(arg0: java.io.FileDescriptor, arg1: java.net.InetAddress, arg2: int): void
                public static localAddress(arg0: java.io.FileDescriptor): java.net.InetSocketAddress
                public static class: java.lang.Class<any>
            }
        }
    }
}