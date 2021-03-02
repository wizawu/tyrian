declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        abstract class SctpChannel extends java.nio.channels.spi.AbstractSelectableChannel {
          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          public static open(): com.sun.nio.sctp.SctpChannel
          public static open(arg0: java.net.SocketAddress, arg1: int, arg2: int): com.sun.nio.sctp.SctpChannel
          public abstract association(): com.sun.nio.sctp.Association
          public abstract bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpChannel
          public abstract bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
          public abstract unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
          public abstract connect(arg0: java.net.SocketAddress): boolean
          public abstract connect(arg0: java.net.SocketAddress, arg1: int, arg2: int): boolean
          public abstract isConnectionPending(): boolean
          public abstract finishConnect(): boolean
          public abstract getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
          public abstract getRemoteAddresses(): java.util.Set<java.net.SocketAddress>
          public abstract shutdown(): com.sun.nio.sctp.SctpChannel
          public abstract getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
          public abstract setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpChannel
          public abstract supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<unknown>>
          public validOps(): int
          public abstract receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T>): com.sun.nio.sctp.MessageInfo
          public abstract send(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
        }

      }
    }
  }
}
