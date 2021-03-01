declare namespace java {
  namespace net {

    class Inet6Address extends java.net.InetAddress {

      static readonly INADDRSZ: int
      constructor()
      constructor(arg0: java.lang.String, arg1: byte[], arg2: int)
      constructor(arg0: java.lang.String, arg1: byte[])
      constructor(arg0: java.lang.String, arg1: byte[], arg2: java.net.NetworkInterface)
      constructor(arg0: java.lang.String, arg1: byte[], arg2: java.lang.String)
      public static getByAddress(arg0: java.lang.String, arg1: byte[], arg2: java.net.NetworkInterface): java.net.Inet6Address
      public static getByAddress(arg0: java.lang.String, arg1: byte[], arg2: int): java.net.Inet6Address
      public isMulticastAddress(): boolean
      public isAnyLocalAddress(): boolean
      public isLoopbackAddress(): boolean
      public isLinkLocalAddress(): boolean
      static isLinkLocalAddress(arg0: byte[]): boolean
      public isSiteLocalAddress(): boolean
      static isSiteLocalAddress(arg0: byte[]): boolean
      public isMCGlobal(): boolean
      public isMCNodeLocal(): boolean
      public isMCLinkLocal(): boolean
      public isMCSiteLocal(): boolean
      public isMCOrgLocal(): boolean
      public getAddress(): byte[]
      public getScopeId(): int
      public getScopedInterface(): java.net.NetworkInterface
      public getHostAddress(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public isIPv4CompatibleAddress(): boolean
      static numericToTextFormat(arg0: byte[]): java.lang.String
    }

  }
}
