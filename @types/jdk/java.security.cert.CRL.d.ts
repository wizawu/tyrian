declare namespace java {
  namespace security {
    namespace cert {

      abstract class CRL {

        protected constructor(arg0: java.lang.String)
        public readonly getType(): java.lang.String
        public abstract toString(): java.lang.String
        public abstract isRevoked(arg0: java.security.cert.Certificate): boolean
      }

    }
  }
}
