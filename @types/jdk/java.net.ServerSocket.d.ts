declare namespace java {
  namespace net {

    class ServerSocket implements java.io.Closeable {
      constructor(arg0: java.net.SocketImpl)
      public constructor()
      public constructor(arg0: int)
      public constructor(arg0: int, arg1: int)
      public constructor(arg0: int, arg1: int, arg2: java.net.InetAddress)
      getImpl(): java.net.SocketImpl
      createImpl(): void
      public bind(arg0: java.net.SocketAddress): void
      public bind(arg0: java.net.SocketAddress, arg1: int): void
      public getInetAddress(): java.net.InetAddress
      public getLocalPort(): int
      public getLocalSocketAddress(): java.net.SocketAddress
      public accept(): java.net.Socket
      protected implAccept(arg0: java.net.Socket): void
      public close(): void
      public getChannel(): java.nio.channels.ServerSocketChannel
      public isBound(): boolean
      public isClosed(): boolean
      public setSoTimeout(arg0: int): void
      public getSoTimeout(): int
      public setReuseAddress(arg0: boolean): void
      public getReuseAddress(): boolean
      public toString(): java.lang.String
      setBound(): void
      setCreated(): void
      public static setSocketFactory(arg0: java.net.SocketImplFactory): void
      public setReceiveBufferSize(arg0: int): void
      public getReceiveBufferSize(): int
      public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
      public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.net.ServerSocket
      public getOption<T>(arg0: java.net.SocketOption<T>): T
      public supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
