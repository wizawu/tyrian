declare namespace javax {
  namespace net {
    namespace ssl {
      abstract class SNIServerName {
        protected constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[])
        public getType(): number
        public getEncoded(): number[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
