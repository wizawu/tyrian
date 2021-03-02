declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class AsynchronousChannelProvider {
          protected constructor()
          public static provider(): java.nio.channels.spi.AsynchronousChannelProvider
          public abstract openAsynchronousChannelGroup(arg0: int, arg1: java.util.concurrent.ThreadFactory): java.nio.channels.AsynchronousChannelGroup
          public abstract openAsynchronousChannelGroup(arg0: java.util.concurrent.ExecutorService, arg1: int): java.nio.channels.AsynchronousChannelGroup
          public abstract openAsynchronousServerSocketChannel(arg0: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousServerSocketChannel
          public abstract openAsynchronousSocketChannel(arg0: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousSocketChannel
        }

      }
    }
  }
}
