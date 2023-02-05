declare namespace java {
  namespace security {
    namespace cert {
      class PKIXBuilderParameters extends java.security.cert.PKIXParameters {
        public constructor(arg0: java.util.Set<java.security.cert.TrustAnchor>, arg1: java.security.cert.CertSelector)
        public constructor(arg0: java.security.KeyStore, arg1: java.security.cert.CertSelector)
        public setMaxPathLength(arg0: number | java.lang.Integer): void
        public getMaxPathLength(): number
        public toString(): java.lang.String
      }
    }
  }
}
