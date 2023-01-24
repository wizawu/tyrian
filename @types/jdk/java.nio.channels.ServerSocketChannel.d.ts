declare namespace java {
  namespace nio {
    namespace channels {
      abstract class ServerSocketChannel
        extends java.nio.channels.spi.AbstractSelectableChannel
        implements java.nio.channels.NetworkChannel
      {
        protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
        public static open(): java.nio.channels.ServerSocketChannel
        public validOps(): number
        public bind(arg0: java.net.SocketAddress): java.nio.channels.ServerSocketChannel
        public abstract bind(
          arg0: java.net.SocketAddress,
          arg1: number | java.lang.Integer
        ): java.nio.channels.ServerSocketChannel
        public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.ServerSocketChannel
        public abstract socket(): java.net.ServerSocket
        public abstract accept(): java.nio.channels.SocketChannel
        public abstract getLocalAddress(): java.net.SocketAddress
        public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object | any): java.nio.channels.NetworkChannel
        public bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
      }
    }
  }
}
