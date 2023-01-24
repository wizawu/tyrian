declare namespace java {
  namespace nio {
    namespace channels {
      abstract class DatagramChannel
        extends java.nio.channels.spi.AbstractSelectableChannel
        implements
          java.nio.channels.ByteChannel,
          java.nio.channels.ScatteringByteChannel,
          java.nio.channels.GatheringByteChannel,
          java.nio.channels.MulticastChannel
      {
        protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
        public static open(): java.nio.channels.DatagramChannel
        public static open(
          arg0: java.net.ProtocolFamily | java.net.ProtocolFamily$$lambda
        ): java.nio.channels.DatagramChannel
        public validOps(): number
        public abstract bind(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
        public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.DatagramChannel
        public abstract socket(): java.net.DatagramSocket
        public abstract isConnected(): boolean
        public abstract connect(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
        public abstract disconnect(): java.nio.channels.DatagramChannel
        public abstract getRemoteAddress(): java.net.SocketAddress
        public abstract receive(arg0: java.nio.ByteBuffer): java.net.SocketAddress
        public abstract send(arg0: java.nio.ByteBuffer, arg1: java.net.SocketAddress): number
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
