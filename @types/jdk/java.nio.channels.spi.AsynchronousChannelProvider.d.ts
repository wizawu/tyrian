declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {
        abstract class AsynchronousChannelProvider {
          protected constructor()
          public static provider(): java.nio.channels.spi.AsynchronousChannelProvider
          public abstract openAsynchronousChannelGroup(
            arg0: number | java.lang.Integer,
            arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda
          ): java.nio.channels.AsynchronousChannelGroup
          public abstract openAsynchronousChannelGroup(
            arg0: java.util.concurrent.ExecutorService,
            arg1: number | java.lang.Integer
          ): java.nio.channels.AsynchronousChannelGroup
          public abstract openAsynchronousServerSocketChannel(
            arg0: java.nio.channels.AsynchronousChannelGroup
          ): java.nio.channels.AsynchronousServerSocketChannel
          public abstract openAsynchronousSocketChannel(
            arg0: java.nio.channels.AsynchronousChannelGroup
          ): java.nio.channels.AsynchronousSocketChannel
        }
      }
    }
  }
}
