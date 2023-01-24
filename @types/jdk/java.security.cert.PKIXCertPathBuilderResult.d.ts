declare namespace java {
  namespace security {
    namespace cert {
      class PKIXCertPathBuilderResult
        extends java.security.cert.PKIXCertPathValidatorResult
        implements java.security.cert.CertPathBuilderResult
      {
        public constructor(
          arg0: java.security.cert.CertPath,
          arg1: java.security.cert.TrustAnchor,
          arg2: java.security.cert.PolicyNode,
          arg3: java.security.PublicKey
        )
        public getCertPath(): java.security.cert.CertPath
        public toString(): java.lang.String
      }
    }
  }
}
