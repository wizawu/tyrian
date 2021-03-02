declare namespace javax {
  namespace net {
    namespace ssl {

      class SNIHostName extends javax.net.ssl.SNIServerName {
        public constructor(arg0: java.lang.String)
        public constructor(arg0: byte[])
        public getAsciiName(): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        public static createSNIMatcher(arg0: java.lang.String): javax.net.ssl.SNIMatcher
      }

    }
  }
}
