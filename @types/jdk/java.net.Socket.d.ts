declare namespace java {
  namespace net {

    class Socket implements java.io.Closeable {
      impl: java.net.SocketImpl
      public constructor()
      public constructor(arg0: java.net.Proxy)
      protected constructor(arg0: java.net.SocketImpl)
      public constructor(arg0: java.lang.String, arg1: int)
      public constructor(arg0: java.net.InetAddress, arg1: int)
      public constructor(arg0: java.lang.String, arg1: int, arg2: java.net.InetAddress, arg3: int)
      public constructor(arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int)
      public constructor(arg0: java.lang.String, arg1: int, arg2: boolean)
      public constructor(arg0: java.net.InetAddress, arg1: int, arg2: boolean)
      createImpl(arg0: boolean): void
      setImpl(): void
      getImpl(): java.net.SocketImpl
      public connect(arg0: java.net.SocketAddress): void
      public connect(arg0: java.net.SocketAddress, arg1: int): void
      public bind(arg0: java.net.SocketAddress): void
      postAccept(): void
      setCreated(): void
      setBound(): void
      setConnected(): void
      public getInetAddress(): java.net.InetAddress
      public getLocalAddress(): java.net.InetAddress
      public getPort(): int
      public getLocalPort(): int
      public getRemoteSocketAddress(): java.net.SocketAddress
      public getLocalSocketAddress(): java.net.SocketAddress
      public getChannel(): java.nio.channels.SocketChannel
      public getInputStream(): java.io.InputStream
      public getOutputStream(): java.io.OutputStream
      public setTcpNoDelay(arg0: boolean): void
      public getTcpNoDelay(): boolean
      public setSoLinger(arg0: boolean, arg1: int): void
      public getSoLinger(): int
      public sendUrgentData(arg0: int): void
      public setOOBInline(arg0: boolean): void
      public getOOBInline(): boolean
      public setSoTimeout(arg0: int): void
      public getSoTimeout(): int
      public setSendBufferSize(arg0: int): void
      public getSendBufferSize(): int
      public setReceiveBufferSize(arg0: int): void
      public getReceiveBufferSize(): int
      public setKeepAlive(arg0: boolean): void
      public getKeepAlive(): boolean
      public setTrafficClass(arg0: int): void
      public getTrafficClass(): int
      public setReuseAddress(arg0: boolean): void
      public getReuseAddress(): boolean
      public close(): void
      public shutdownInput(): void
      public shutdownOutput(): void
      public toString(): java.lang.String
      public isConnected(): boolean
      public isBound(): boolean
      public isClosed(): boolean
      public isInputShutdown(): boolean
      public isOutputShutdown(): boolean
      public static setSocketImplFactory(arg0: java.net.SocketImplFactory): void
      public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
      public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.net.Socket
      public getOption<T>(arg0: java.net.SocketOption<T>): T
      public supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
