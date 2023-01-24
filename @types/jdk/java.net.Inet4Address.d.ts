declare namespace java {
  namespace net {
    class Inet4Address extends java.net.InetAddress {
      static readonly INADDRSZ: int
      constructor()
      constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[])
      constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
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
      public getAddress(): number[]
      public getHostAddress(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      static numericToTextFormat(arg0: number[] | java.lang.Byte[]): java.lang.String
    }
  }
}
