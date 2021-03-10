declare namespace java {
  namespace net {

    class DatagramPacket {
      buf: byte[]
      offset: int
      length: int
      bufLength: int
      address: java.net.InetAddress
      port: int
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer)
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.net.InetAddress, arg4: number | java.lang.Integer)
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.net.SocketAddress)
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: java.net.InetAddress, arg3: number | java.lang.Integer)
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: java.net.SocketAddress)
      public getAddress(): java.net.InetAddress
      public getPort(): number
      public getData(): number[]
      public getOffset(): number
      public getLength(): number
      public setData(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public setAddress(arg0: java.net.InetAddress): void
      public setPort(arg0: number | java.lang.Integer): void
      public setSocketAddress(arg0: java.net.SocketAddress): void
      public getSocketAddress(): java.net.SocketAddress
      public setData(arg0: number[] | java.lang.Byte[]): void
      public setLength(arg0: number | java.lang.Integer): void
    }

  }
}
