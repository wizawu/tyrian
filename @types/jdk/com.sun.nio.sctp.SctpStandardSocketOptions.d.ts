declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        class SctpStandardSocketOptions {
          public static readonly SCTP_DISABLE_FRAGMENTS: com.sun.nio.sctp.SctpSocketOption<java.lang.Boolean>
          public static readonly SCTP_EXPLICIT_COMPLETE: com.sun.nio.sctp.SctpSocketOption<java.lang.Boolean>
          public static readonly SCTP_FRAGMENT_INTERLEAVE: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
          public static readonly SCTP_INIT_MAXSTREAMS: com.sun.nio.sctp.SctpSocketOption<com.sun.nio.sctp.SctpStandardSocketOptions$InitMaxStreams>
          public static readonly SCTP_NODELAY: com.sun.nio.sctp.SctpSocketOption<java.lang.Boolean>
          public static readonly SCTP_PRIMARY_ADDR: com.sun.nio.sctp.SctpSocketOption<java.net.SocketAddress>
          public static readonly SCTP_SET_PEER_PRIMARY_ADDR: com.sun.nio.sctp.SctpSocketOption<java.net.SocketAddress>
          public static readonly SO_SNDBUF: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
          public static readonly SO_RCVBUF: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
          public static readonly SO_LINGER: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
        }

      }
    }
  }
}
