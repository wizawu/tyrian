declare namespace java {
  namespace security {
    namespace cert {
      abstract class CertPath implements java.io.Serializable {
        protected constructor(arg0: java.lang.String | string)
        public getType(): java.lang.String
        public abstract getEncodings(): java.util.Iterator<java.lang.String>
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        public abstract getEncoded(): number[]
        public abstract getEncoded(arg0: java.lang.String | string): number[]
        public abstract getCertificates(): java.util.List<java.security.cert.Certificate>
        protected writeReplace(): java.lang.Object
      }
    }
  }
}
