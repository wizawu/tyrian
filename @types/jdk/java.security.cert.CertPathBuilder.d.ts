declare namespace java {
  namespace security {
    namespace cert {

      class CertPathBuilder {
        protected constructor(arg0: java.security.cert.CertPathBuilderSpi, arg1: java.security.Provider, arg2: java.lang.String)
        public static getInstance(arg0: java.lang.String): java.security.cert.CertPathBuilder
        public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.cert.CertPathBuilder
        public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.cert.CertPathBuilder
        public getProvider(): java.security.Provider
        public getAlgorithm(): java.lang.String
        public build(arg0: java.security.cert.CertPathParameters): java.security.cert.CertPathBuilderResult
        public static getDefaultType(): java.lang.String
        public getRevocationChecker(): java.security.cert.CertPathChecker
      }

    }
  }
}
