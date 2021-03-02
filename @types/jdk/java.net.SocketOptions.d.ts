declare namespace java {
  namespace net {

    interface SocketOptions {
      public static readonly TCP_NODELAY: int
      public static readonly SO_BINDADDR: int
      public static readonly SO_REUSEADDR: int
      public static readonly SO_REUSEPORT: int
      public static readonly SO_BROADCAST: int
      public static readonly IP_MULTICAST_IF: int
      public static readonly IP_MULTICAST_IF2: int
      public static readonly IP_MULTICAST_LOOP: int
      public static readonly IP_TOS: int
      public static readonly SO_LINGER: int
      public static readonly SO_TIMEOUT: int
      public static readonly SO_SNDBUF: int
      public static readonly SO_RCVBUF: int
      public static readonly SO_KEEPALIVE: int
      public static readonly SO_OOBINLINE: int
      setOption(arg0: int, arg1: java.lang.Object): void
      getOption(arg0: int): java.lang.Object
    }

  }
}
