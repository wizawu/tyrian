declare namespace java {
  namespace net {

    abstract class SocketImpl implements java.net.SocketOptions {
      socket: java.net.Socket
      serverSocket: java.net.ServerSocket
      protected fd: java.io.FileDescriptor
      protected address: java.net.InetAddress
      protected port: int
      protected localport: int
      public constructor()
      protected abstract create(arg0: boolean | java.lang.Boolean): void
      protected abstract connect(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      protected abstract connect(arg0: java.net.InetAddress, arg1: number | java.lang.Integer): void
      protected abstract connect(arg0: java.net.SocketAddress, arg1: number | java.lang.Integer): void
      protected abstract bind(arg0: java.net.InetAddress, arg1: number | java.lang.Integer): void
      protected abstract listen(arg0: number | java.lang.Integer): void
      protected abstract accept(arg0: java.net.SocketImpl): void
      protected abstract getInputStream(): java.io.InputStream
      protected abstract getOutputStream(): java.io.OutputStream
      protected abstract available(): number
      protected abstract close(): void
      protected shutdownInput(): void
      protected shutdownOutput(): void
      protected getFileDescriptor(): java.io.FileDescriptor
      protected getInetAddress(): java.net.InetAddress
      protected getPort(): number
      protected supportsUrgentData(): boolean
      protected abstract sendUrgentData(arg0: number | java.lang.Integer): void
      protected getLocalPort(): number
      setSocket(arg0: java.net.Socket): void
      getSocket(): java.net.Socket
      setServerSocket(arg0: java.net.ServerSocket): void
      getServerSocket(): java.net.ServerSocket
      public toString(): java.lang.String
      reset(): void
      protected setPerformancePreferences(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      protected setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): void
      protected getOption<T>(arg0: java.net.SocketOption<T>): T
      protected supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
