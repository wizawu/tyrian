declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SNIServerName {
        protected constructor(arg0: int, arg1: byte[])
        public getType(): int
        public getEncoded(): byte[]
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
