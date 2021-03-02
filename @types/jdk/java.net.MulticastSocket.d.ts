declare namespace java {
  namespace net {

    class MulticastSocket extends java.net.DatagramSocket {
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.net.SocketAddress)
      public setTTL(arg0: number | java.lang.Byte): void
      public setTimeToLive(arg0: number | java.lang.Integer): void
      public getTTL(): number
      public getTimeToLive(): number
      public joinGroup(arg0: java.net.InetAddress): void
      public leaveGroup(arg0: java.net.InetAddress): void
      public joinGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
      public leaveGroup(arg0: java.net.SocketAddress, arg1: java.net.NetworkInterface): void
      public setInterface(arg0: java.net.InetAddress): void
      public getInterface(): java.net.InetAddress
      public setNetworkInterface(arg0: java.net.NetworkInterface): void
      public getNetworkInterface(): java.net.NetworkInterface
      public setLoopbackMode(arg0: boolean | java.lang.Boolean): void
      public getLoopbackMode(): boolean
      public send(arg0: java.net.DatagramPacket, arg1: number | java.lang.Byte): void
      public supportedOptions(): java.util.Set<java.net.SocketOption<unknown>>
    }

  }
}
