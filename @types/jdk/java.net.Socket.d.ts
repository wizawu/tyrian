declare namespace java {
  namespace net {

    class Socket implements java.io.Closeable {
      impl: java.net.SocketImpl
      public constructor()
      public constructor(arg0: java.net.Proxy)
      protected constructor(arg0: java.net.SocketImpl)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(arg0: java.net.InetAddress, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.net.InetAddress, arg3: number | java.lang.Integer)
      public constructor(arg0: java.net.InetAddress, arg1: number | java.lang.Integer, arg2: java.net.InetAddress, arg3: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean)
      public constructor(arg0: java.net.InetAddress, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean)
      createImpl(arg0: boolean | java.lang.Boolean): void
      setImpl(): void
      getImpl(): java.net.SocketImpl
      public connect(arg0: java.net.SocketAddress): void
      public connect(arg0: java.net.SocketAddress, arg1: number | java.lang.Integer): void
      public bind(arg0: java.net.SocketAddress): void
      postAccept(): void
      setCreated(): void
      setBound(): void
      setConnected(): void
      public getInetAddress(): java.net.InetAddress
      public getLocalAddress(): java.net.InetAddress
      public getPort(): number
      public getLocalPort(): number
      public getRemoteSocketAddress(): java.net.SocketAddress
      public getLocalSocketAddress(): java.net.SocketAddress
      public getChannel(): java.nio.channels.SocketChannel
      public getInputStream(): java.io.InputStream
      public getOutputStream(): java.io.OutputStream
      public setTcpNoDelay(arg0: boolean | java.lang.Boolean): void
      public getTcpNoDelay(): boolean
      public setSoLinger(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer): void
      public getSoLinger(): number
      public sendUrgentData(arg0: number | java.lang.Integer): void
      public setOOBInline(arg0: boolean | java.lang.Boolean): void
      public getOOBInline(): boolean
      public setSoTimeout(arg0: number | java.lang.Integer): void
      public getSoTimeout(): number
      public setSendBufferSize(arg0: number | java.lang.Integer): void
      public getSendBufferSize(): number
      public setReceiveBufferSize(arg0: number | java.lang.Integer): void
      public getReceiveBufferSize(): number
      public setKeepAlive(arg0: boolean | java.lang.Boolean): void
      public getKeepAlive(): boolean
      public setTrafficClass(arg0: number | java.lang.Integer): void
      public getTrafficClass(): number
      public setReuseAddress(arg0: boolean | java.lang.Boolean): void
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
      public static setSocketImplFactory(arg0: java.net.SocketImplFactory | java.net.SocketImplFactory$$lambda): void
      public setPerformancePreferences(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.net.Socket
      public getOption<T>(arg0: java.net.SocketOption<T>): T
      public supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
