declare namespace java {
  namespace net {

    class InetSocketAddress extends java.net.SocketAddress {
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.net.InetAddress, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public static createUnresolved(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.net.InetSocketAddress
      public getPort(): number
      public getAddress(): java.net.InetAddress
      public getHostName(): java.lang.String
      public getHostString(): java.lang.String
      public isUnresolved(): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
