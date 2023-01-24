declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {
        abstract class SctpMultiChannel extends java.nio.channels.spi.AbstractSelectableChannel {
          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          public static open(): com.sun.nio.sctp.SctpMultiChannel
          public abstract associations(): java.util.Set<com.sun.nio.sctp.Association>
          public abstract bind(
            arg0: java.net.SocketAddress,
            arg1: number | java.lang.Integer
          ): com.sun.nio.sctp.SctpMultiChannel
          public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpMultiChannel
          public abstract bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
          public abstract unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
          public abstract getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
          public abstract getRemoteAddresses(arg0: com.sun.nio.sctp.Association): java.util.Set<java.net.SocketAddress>
          public abstract shutdown(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
          public abstract getOption<T>(
            arg0: com.sun.nio.sctp.SctpSocketOption<T>,
            arg1: com.sun.nio.sctp.Association
          ): T
          public abstract setOption<T>(
            arg0: com.sun.nio.sctp.SctpSocketOption<T>,
            arg1: T,
            arg2: com.sun.nio.sctp.Association
          ): com.sun.nio.sctp.SctpMultiChannel
          public abstract supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<unknown>>
          public validOps(): number
          public abstract receive<T>(
            arg0: java.nio.ByteBuffer,
            arg1: T,
            arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$lambda<T>
          ): com.sun.nio.sctp.MessageInfo
          public abstract send(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): number
          public abstract branch(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpChannel
        }
      }
    }
  }
}
