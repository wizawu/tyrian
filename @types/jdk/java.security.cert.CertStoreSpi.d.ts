declare namespace java {
  namespace security {
    namespace cert {
      abstract class CertStoreSpi {
        public constructor(
          arg0: java.security.cert.CertStoreParameters | java.security.cert.CertStoreParameters$$lambda
        )
        public abstract engineGetCertificates(
          arg0: java.security.cert.CertSelector
        ): java.util.Collection<java.security.cert.Certificate>
        public abstract engineGetCRLs(
          arg0: java.security.cert.CRLSelector
        ): java.util.Collection<java.security.cert.CRL>
      }
    }
  }
}
