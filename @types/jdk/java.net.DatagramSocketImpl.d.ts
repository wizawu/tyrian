declare namespace java {
  namespace net {

    abstract class DatagramSocketImpl implements java.net.SocketOptions {
      protected localPort: int
      protected fd: java.io.FileDescriptor
      socket: java.net.DatagramSocket
      public constructor()
      setDatagramSocket(arg0: java.net.DatagramSocket): void
      getDatagramSocket(): java.net.DatagramSocket
      dataAvailable(): int
      protected abstract create(): void
      protected abstract bind(arg0: int, arg1: java.net.InetAddress): void
      protected abstract send(arg0: java.net.DatagramPacket): void
      protected connect(arg0: java.net.InetAddress, arg1: int): void
      protected disconnect(): void
      protected abstract peek(arg0: java.net.InetAddress): int
      protected abstract peekData(arg0: java.net.DatagramPacket): int
      protected abstract receive(arg0: java.net.DatagramPacket): void
      protected abstract setTTL(arg0: byte): void
      protected abstract getTTL(): byte
      protected abstract setTimeToLive(arg0: int): void
      protected abstract getTimeToLive(): int
      protected abstract join(arg0: java.net.InetAddress): void
      protected abstract leave(arg0: java.net.InetAddress): void
      protected abstract joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
      protected abstract leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
      protected abstract close(): void
      protected getLocalPort(): int
      protected getFileDescriptor(): java.io.FileDescriptor
      protected setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): void
      protected getOption<T>(arg0: java.net.SocketOption<T>): T
      protected supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
