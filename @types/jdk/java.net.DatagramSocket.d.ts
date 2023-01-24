declare namespace java {
  namespace net {
    class DatagramSocket implements java.io.Closeable {
      impl: java.net.DatagramSocketImpl
      oldImpl: boolean
      static readonly ST_NOT_CONNECTED: int
      static readonly ST_CONNECTED: int
      static readonly ST_CONNECTED_NO_IMPL: int
      connectState: int
      connectedAddress: java.net.InetAddress
      connectedPort: int
      static implClass: java.lang.Class<unknown>
      static factory: java.net.DatagramSocketImplFactory
      public constructor()
      protected constructor(arg0: java.net.DatagramSocketImpl)
      public constructor(arg0: java.net.SocketAddress)
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: java.net.InetAddress)
      createImpl(): void
      getImpl(): java.net.DatagramSocketImpl
      public bind(arg0: java.net.SocketAddress): void
      checkAddress(arg0: java.net.InetAddress, arg1: java.lang.String | string): void
      public connect(arg0: java.net.InetAddress, arg1: number | java.lang.Integer): void
      public connect(arg0: java.net.SocketAddress): void
      public disconnect(): void
      public isBound(): boolean
      public isConnected(): boolean
      public getInetAddress(): java.net.InetAddress
      public getPort(): number
      public getRemoteSocketAddress(): java.net.SocketAddress
      public getLocalSocketAddress(): java.net.SocketAddress
      public send(arg0: java.net.DatagramPacket): void
      public receive(arg0: java.net.DatagramPacket): void
      public getLocalAddress(): java.net.InetAddress
      public getLocalPort(): number
      public setSoTimeout(arg0: number | java.lang.Integer): void
      public getSoTimeout(): number
      public setSendBufferSize(arg0: number | java.lang.Integer): void
      public getSendBufferSize(): number
      public setReceiveBufferSize(arg0: number | java.lang.Integer): void
      public getReceiveBufferSize(): number
      public setReuseAddress(arg0: boolean | java.lang.Boolean): void
      public getReuseAddress(): boolean
      public setBroadcast(arg0: boolean | java.lang.Boolean): void
      public getBroadcast(): boolean
      public setTrafficClass(arg0: number | java.lang.Integer): void
      public getTrafficClass(): number
      public close(): void
      public isClosed(): boolean
      public getChannel(): java.nio.channels.DatagramChannel
      public static setDatagramSocketImplFactory(
        arg0: java.net.DatagramSocketImplFactory | java.net.DatagramSocketImplFactory$$lambda
      ): void
      public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.net.DatagramSocket
      public getOption<T>(arg0: java.net.SocketOption<T>): T
      public supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }
  }
}
