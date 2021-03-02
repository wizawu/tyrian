declare namespace java {
  namespace security {
    namespace cert {

      abstract class CertPathBuilderSpi {
        public constructor()
        public abstract engineBuild(arg0: java.security.cert.CertPathParameters | java.security.cert.CertPathParameters$$lambda): java.security.cert.CertPathBuilderResult
        public engineGetRevocationChecker(): java.security.cert.CertPathChecker
      }

    }
  }
}
