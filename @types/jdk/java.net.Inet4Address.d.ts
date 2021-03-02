declare namespace java {
  namespace net {

    class Inet4Address extends java.net.InetAddress {
      static readonly INADDRSZ: int
      constructor()
      constructor(arg0: java.lang.String, arg1: byte[])
      constructor(arg0: java.lang.String, arg1: int)
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
      public getAddress(): byte[]
      public getHostAddress(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      static numericToTextFormat(arg0: byte[]): java.lang.String
    }

  }
}
