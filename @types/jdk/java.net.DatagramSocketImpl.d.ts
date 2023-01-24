declare namespace java {
  namespace net {
    abstract class DatagramSocketImpl implements java.net.SocketOptions {
      protected localPort: int
      protected fd: java.io.FileDescriptor
      socket: java.net.DatagramSocket
      public constructor()
      setDatagramSocket(arg0: java.net.DatagramSocket): void
      getDatagramSocket(): java.net.DatagramSocket
      dataAvailable(): number
      protected abstract create(): void
      protected abstract bind(arg0: number | java.lang.Integer, arg1: java.net.InetAddress): void
      protected abstract send(arg0: java.net.DatagramPacket): void
      protected connect(arg0: java.net.InetAddress, arg1: number | java.lang.Integer): void
      protected disconnect(): void
      protected abstract peek(arg0: java.net.InetAddress): number
      protected abstract peekData(arg0: java.net.DatagramPacket): number
      protected abstract receive(arg0: java.net.DatagramPacket): void
      protected abstract setTTL(arg0: number | java.lang.Byte): void
      protected abstract getTTL(): number
      protected abstract setTimeToLive(arg0: number | java.lang.Integer): void
      protected abstract getTimeToLive(): number
      protected abstract join(arg0: java.net.InetAddress): void
      protected abstract leave(arg0: java.net.InetAddress): void
      protected abstract joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
      protected abstract leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
      protected abstract close(): void
      protected getLocalPort(): number
      protected getFileDescriptor(): java.io.FileDescriptor
      protected setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): void
      protected getOption<T>(arg0: java.net.SocketOption<T>): T
      protected supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }
  }
}
