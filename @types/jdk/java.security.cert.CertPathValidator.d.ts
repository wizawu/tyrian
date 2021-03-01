declare namespace java {
  namespace security {
    namespace cert {

      class CertPathValidator {

        protected constructor(arg0: java.security.cert.CertPathValidatorSpi, arg1: java.security.Provider, arg2: java.lang.String)
        public static getInstance(arg0: java.lang.String): java.security.cert.CertPathValidator
        public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.cert.CertPathValidator
        public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.cert.CertPathValidator
        public readonly getProvider(): java.security.Provider
        public readonly getAlgorithm(): java.lang.String
        public readonly validate(arg0: java.security.cert.CertPath, arg1: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult
        public static readonly getDefaultType(): java.lang.String
        public readonly getRevocationChecker(): java.security.cert.CertPathChecker
      }

    }
  }
}
