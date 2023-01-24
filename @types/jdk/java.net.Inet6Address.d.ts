declare namespace java {
  namespace net {
    class Inet6Address extends java.net.InetAddress {
      static readonly INADDRSZ: int
      constructor()
      constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[], arg2: number | java.lang.Integer)
      constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[])
      constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[], arg2: java.net.NetworkInterface)
      constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[], arg2: java.lang.String | string)
      public static getByAddress(
        arg0: java.lang.String | string,
        arg1: number[] | java.lang.Byte[],
        arg2: java.net.NetworkInterface
      ): java.net.Inet6Address
      public static getByAddress(
        arg0: java.lang.String | string,
        arg1: number[] | java.lang.Byte[],
        arg2: number | java.lang.Integer
      ): java.net.Inet6Address
      public isMulticastAddress(): boolean
      public isAnyLocalAddress(): boolean
      public isLoopbackAddress(): boolean
      public isLinkLocalAddress(): boolean
      static isLinkLocalAddress(arg0: number[] | java.lang.Byte[]): boolean
      public isSiteLocalAddress(): boolean
      static isSiteLocalAddress(arg0: number[] | java.lang.Byte[]): boolean
      public isMCGlobal(): boolean
      public isMCNodeLocal(): boolean
      public isMCLinkLocal(): boolean
      public isMCSiteLocal(): boolean
      public isMCOrgLocal(): boolean
      public getAddress(): number[]
      public getScopeId(): number
      public getScopedInterface(): java.net.NetworkInterface
      public getHostAddress(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public isIPv4CompatibleAddress(): boolean
      static numericToTextFormat(arg0: number[] | java.lang.Byte[]): java.lang.String
    }
  }
}
