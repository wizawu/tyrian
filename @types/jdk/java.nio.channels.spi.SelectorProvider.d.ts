declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class SelectorProvider {
          protected constructor()
          public static provider(): java.nio.channels.spi.SelectorProvider
          public abstract openDatagramChannel(): java.nio.channels.DatagramChannel
          public abstract openDatagramChannel(arg0: java.net.ProtocolFamily | java.net.ProtocolFamily$$lambda): java.nio.channels.DatagramChannel
          public abstract openPipe(): java.nio.channels.Pipe
          public abstract openSelector(): java.nio.channels.spi.AbstractSelector
          public abstract openServerSocketChannel(): java.nio.channels.ServerSocketChannel
          public abstract openSocketChannel(): java.nio.channels.SocketChannel
          public inheritedChannel(): java.nio.channels.Channel
        }

      }
    }
  }
}
