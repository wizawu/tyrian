declare namespace java {
  namespace net {
    class InetAddress implements java.io.Serializable {
      static readonly PREFER_IPV4_VALUE: int
      static readonly PREFER_IPV6_VALUE: int
      static readonly PREFER_SYSTEM_VALUE: int
      static readonly IPv4: int
      static readonly IPv6: int
      static readonly preferIPv6Address: int
      readonly holder: java.net.InetAddress$InetAddressHolder
      static readonly impl: java.net.InetAddressImpl
      holder(): java.net.InetAddress$InetAddressHolder
      constructor()
      public isMulticastAddress(): boolean
      public isAnyLocalAddress(): boolean
      public isLoopbackAddress(): boolean
      public isLinkLocalAddress(): boolean
      public isSiteLocalAddress(): boolean
      public isMCGlobal(): boolean
      public isMCNodeLocal(): boolean
      public isMCLinkLocal(): boolean
      public isMCSiteLocal(): boolean
      public isMCOrgLocal(): boolean
      public isReachable(arg0: number | java.lang.Integer): boolean
      public isReachable(
        arg0: java.net.NetworkInterface,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): boolean
      public getHostName(): java.lang.String
      getHostName(arg0: boolean | java.lang.Boolean): java.lang.String
      public getCanonicalHostName(): java.lang.String
      public getAddress(): number[]
      public getHostAddress(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
      public static getByAddress(
        arg0: java.lang.String | string,
        arg1: number[] | java.lang.Byte[]
      ): java.net.InetAddress
      public static getByName(arg0: java.lang.String | string): java.net.InetAddress
      public static getAllByName(arg0: java.lang.String | string): java.net.InetAddress[]
      public static getLoopbackAddress(): java.net.InetAddress
      static getAllByName0(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): java.net.InetAddress[]
      static getAddressesFromNameService(
        arg0: java.lang.String | string,
        arg1: java.net.InetAddress
      ): java.net.InetAddress[]
      public static getByAddress(arg0: number[] | java.lang.Byte[]): java.net.InetAddress
      public static getLocalHost(): java.net.InetAddress
      static anyLocalAddress(): java.net.InetAddress
      static loadImpl(arg0: java.lang.String | string): java.net.InetAddressImpl
    }
  }
}
