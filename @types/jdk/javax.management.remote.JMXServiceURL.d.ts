declare namespace javax {
  namespace management {
    namespace remote {

      class JMXServiceURL implements java.io.Serializable {
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: java.lang.String | string)
        public getProtocol(): java.lang.String
        public getHost(): java.lang.String
        public getPort(): number
        public getURLPath(): java.lang.String
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
