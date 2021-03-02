declare namespace javax {
  namespace management {
    namespace remote {

      class JMXServiceURL implements java.io.Serializable {
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: java.lang.String)
        public getProtocol(): java.lang.String
        public getHost(): java.lang.String
        public getPort(): int
        public getURLPath(): java.lang.String
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
      }

    }
  }
}
