declare namespace java {
  namespace net {
    interface SocketOptions {
      readonly TCP_NODELAY: int
      readonly SO_BINDADDR: int
      readonly SO_REUSEADDR: int
      readonly SO_REUSEPORT: int
      readonly SO_BROADCAST: int
      readonly IP_MULTICAST_IF: int
      readonly IP_MULTICAST_IF2: int
      readonly IP_MULTICAST_LOOP: int
      readonly IP_TOS: int
      readonly SO_LINGER: int
      readonly SO_TIMEOUT: int
      readonly SO_SNDBUF: int
      readonly SO_RCVBUF: int
      readonly SO_KEEPALIVE: int
      readonly SO_OOBINLINE: int
      setOption(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
      getOption(arg0: number | java.lang.Integer): java.lang.Object
    }
  }
}
