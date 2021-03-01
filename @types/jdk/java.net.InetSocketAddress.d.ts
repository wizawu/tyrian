declare namespace java {
  namespace net {

    class InetSocketAddress extends java.net.SocketAddress {

      public constructor(arg0: int)
      public constructor(arg0: java.net.InetAddress, arg1: int)
      public constructor(arg0: java.lang.String, arg1: int)
      public static createUnresolved(arg0: java.lang.String, arg1: int): java.net.InetSocketAddress
      public readonly getPort(): int
      public readonly getAddress(): java.net.InetAddress
      public readonly getHostName(): java.lang.String
      public readonly getHostString(): java.lang.String
      public readonly isUnresolved(): boolean
      public toString(): java.lang.String
      public readonly equals(arg0: java.lang.Object): boolean
      public readonly hashCode(): int
    }

  }
}
