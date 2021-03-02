declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        abstract class SctpServerChannel extends java.nio.channels.spi.AbstractSelectableChannel {
          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          public static open(): com.sun.nio.sctp.SctpServerChannel
          public abstract accept(): com.sun.nio.sctp.SctpChannel
          public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpServerChannel
          public abstract bind(arg0: java.net.SocketAddress, arg1: number | java.lang.Integer): com.sun.nio.sctp.SctpServerChannel
          public abstract bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
          public abstract unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
          public abstract getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
          public abstract getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
          public abstract setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpServerChannel
          public abstract supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<unknown>>
          public validOps(): number
        }

      }
    }
  }
}
