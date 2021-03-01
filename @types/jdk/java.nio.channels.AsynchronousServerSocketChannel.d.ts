declare namespace java {
  namespace nio {
    namespace channels {

      abstract class AsynchronousServerSocketChannel implements java.nio.channels.AsynchronousChannel, java.nio.channels.NetworkChannel {

        protected constructor(arg0: java.nio.channels.spi.AsynchronousChannelProvider)
        public readonly provider(): java.nio.channels.spi.AsynchronousChannelProvider
        public static open(arg0: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousServerSocketChannel
        public static open(): java.nio.channels.AsynchronousServerSocketChannel
        public readonly bind(arg0: java.net.SocketAddress): java.nio.channels.AsynchronousServerSocketChannel
        public abstract bind(arg0: java.net.SocketAddress, arg1: int): java.nio.channels.AsynchronousServerSocketChannel
        public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.AsynchronousServerSocketChannel
        public abstract accept<A>(arg0: A, arg1: java.nio.channels.CompletionHandler<java.nio.channels.AsynchronousSocketChannel,unknown>): void
        public abstract accept(): java.util.concurrent.Future<java.nio.channels.AsynchronousSocketChannel>
        public abstract getLocalAddress(): java.net.SocketAddress
        public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
        public bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
      }

    }
  }
}
