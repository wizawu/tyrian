declare namespace jdk {
  namespace net {

    class ExtendedSocketOptions {
      public static readonly SO_FLOW_SLA: java.net.SocketOption<jdk.net.SocketFlow>
      public static readonly TCP_QUICKACK: java.net.SocketOption<java.lang.Boolean>
      public static readonly TCP_KEEPIDLE: java.net.SocketOption<java.lang.Integer>
      public static readonly TCP_KEEPINTERVAL: java.net.SocketOption<java.lang.Integer>
      public static readonly TCP_KEEPCOUNT: java.net.SocketOption<java.lang.Integer>
      static options(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
