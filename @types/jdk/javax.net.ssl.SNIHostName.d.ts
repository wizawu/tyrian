declare namespace javax {
  namespace net {
    namespace ssl {
      class SNIHostName extends javax.net.ssl.SNIServerName {
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: number[] | java.lang.Byte[])
        public getAsciiName(): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        public static createSNIMatcher(arg0: java.lang.String | string): javax.net.ssl.SNIMatcher
      }
    }
  }
}
