declare namespace java {
  namespace security {
    namespace cert {

      class PKIXCertPathValidatorResult implements java.security.cert.CertPathValidatorResult {
        public constructor(arg0: java.security.cert.TrustAnchor, arg1: java.security.cert.PolicyNode, arg2: java.security.PublicKey)
        public getTrustAnchor(): java.security.cert.TrustAnchor
        public getPolicyTree(): java.security.cert.PolicyNode
        public getPublicKey(): java.security.PublicKey
        public clone(): java.lang.Object
        public toString(): java.lang.String
      }

    }
  }
}
