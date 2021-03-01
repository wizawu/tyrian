declare namespace java {
  namespace security {
    namespace cert {

      class CertificateFactory {

        protected constructor(arg0: java.security.cert.CertificateFactorySpi, arg1: java.security.Provider, arg2: java.lang.String)
        public static readonly getInstance(arg0: java.lang.String): java.security.cert.CertificateFactory
        public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.cert.CertificateFactory
        public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.cert.CertificateFactory
        public readonly getProvider(): java.security.Provider
        public readonly getType(): java.lang.String
        public readonly generateCertificate(arg0: java.io.InputStream): java.security.cert.Certificate
        public readonly getCertPathEncodings(): java.util.Iterator<java.lang.String>
        public readonly generateCertPath(arg0: java.io.InputStream): java.security.cert.CertPath
        public readonly generateCertPath(arg0: java.io.InputStream, arg1: java.lang.String): java.security.cert.CertPath
        public readonly generateCertPath(arg0: java.util.List<java.security.cert.Certificate>): java.security.cert.CertPath
        public readonly generateCertificates(arg0: java.io.InputStream): java.util.Collection<java.security.cert.Certificate>
        public readonly generateCRL(arg0: java.io.InputStream): java.security.cert.CRL
        public readonly generateCRLs(arg0: java.io.InputStream): java.util.Collection<java.security.cert.CRL>
      }

    }
  }
}