declare namespace sun {
    namespace nio {
        namespace ch {
            class Net {
                public static readonly SHUT_RD: int
                public static readonly SHUT_WR: int
                public static readonly SHUT_RDWR: int
                public static readonly POLLIN: short
                public static readonly POLLOUT: short
                public static readonly POLLERR: short
                public static readonly POLLHUP: short
                public static readonly POLLNVAL: short
                public static readonly POLLCONN: short
                public static checkAddress(arg0: java.net.SocketAddress): java.net.InetSocketAddress
                public static isFastTcpLoopbackRequested(): boolean
                public static bind(arg0: java.io.FileDescriptor, arg1: java.net.InetAddress, arg2: int): void
                public static localAddress(arg0: java.io.FileDescriptor): java.net.InetSocketAddress
                public static class: java.lang.Class<any>
            }
        }
    }
}