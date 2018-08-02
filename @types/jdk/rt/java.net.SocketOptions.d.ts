declare namespace java {
    namespace net {
        interface SocketOptions {
            TCP_NODELAY: int
            SO_BINDADDR: int
            SO_REUSEADDR: int
            SO_BROADCAST: int
            IP_MULTICAST_IF: int
            IP_MULTICAST_IF2: int
            IP_MULTICAST_LOOP: int
            IP_TOS: int
            SO_LINGER: int
            SO_TIMEOUT: int
            SO_SNDBUF: int
            SO_RCVBUF: int
            SO_KEEPALIVE: int
            SO_OOBINLINE: int
            setOption(arg0: int, arg1: java.lang.Object): void
            getOption(arg0: int): java.lang.Object
        }
    }
}