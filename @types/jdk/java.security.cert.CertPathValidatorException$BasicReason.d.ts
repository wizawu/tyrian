declare namespace java {
  namespace security {
    namespace cert {

      class CertPathValidatorException$BasicReason extends java.lang.Enum<java.security.cert.CertPathValidatorException$BasicReason> implements java.security.cert.CertPathValidatorException$Reason {

        public static readonly UNSPECIFIED: java.security.cert.CertPathValidatorException$BasicReason
        public static readonly EXPIRED: java.security.cert.CertPathValidatorException$BasicReason
        public static readonly NOT_YET_VALID: java.security.cert.CertPathValidatorException$BasicReason
        public static readonly REVOKED: java.security.cert.CertPathValidatorException$BasicReason
        public static readonly UNDETERMINED_REVOCATION_STATUS: java.security.cert.CertPathValidatorException$BasicReason
        public static readonly INVALID_SIGNATURE: java.security.cert.CertPathValidatorException$BasicReason
        public static readonly ALGORITHM_CONSTRAINED: java.security.cert.CertPathValidatorException$BasicReason
        public static values(): java.security.cert.CertPathValidatorException$BasicReason[]
        public static valueOf(arg0: java.lang.String): java.security.cert.CertPathValidatorException$BasicReason
      }

    }
  }
}
