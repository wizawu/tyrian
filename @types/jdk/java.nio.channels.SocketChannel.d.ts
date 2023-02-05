declare namespace java {
  namespace nio {
    namespace channels {
      abstract class SocketChannel
        extends java.nio.channels.spi.AbstractSelectableChannel
        implements
          java.nio.channels.ByteChannel,
          java.nio.channels.ScatteringByteChannel,
          java.nio.channels.GatheringByteChannel,
          java.nio.channels.NetworkChannel
      {
        static readonly $assertionsDisabled: boolean
        protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
        public static open(): java.nio.channels.SocketChannel
        public static open(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
        public validOps(): number
        public abstract bind(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
        public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.SocketChannel
        public abstract shutdownInput(): java.nio.channels.SocketChannel
        public abstract shutdownOutput(): java.nio.channels.SocketChannel
        public abstract socket(): java.net.Socket
        public abstract isConnected(): boolean
        public abstract isConnectionPending(): boolean
        public abstract connect(arg0: java.net.SocketAddress): boolean
        public abstract finishConnect(): boolean
        public abstract getRemoteAddress(): java.net.SocketAddress
        public abstract read(arg0: java.nio.ByteBuffer): number
        public abstract read(
          arg0: java.nio.ByteBuffer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public read(arg0: java.nio.ByteBuffer[]): number
        public abstract write(arg0: java.nio.ByteBuffer): number
        public abstract write(
          arg0: java.nio.ByteBuffer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public write(arg0: java.nio.ByteBuffer[]): number
        public abstract getLocalAddress(): java.net.SocketAddress
        public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object | any): java.nio.channels.NetworkChannel
        public bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
      }
    }
  }
}
