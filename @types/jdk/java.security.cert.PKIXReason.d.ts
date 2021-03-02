declare namespace java {
  namespace security {
    namespace cert {

      class PKIXReason extends java.lang.Enum<java.security.cert.PKIXReason> implements java.security.cert.CertPathValidatorException$Reason {
        public static readonly NAME_CHAINING: java.security.cert.PKIXReason
        public static readonly INVALID_KEY_USAGE: java.security.cert.PKIXReason
        public static readonly INVALID_POLICY: java.security.cert.PKIXReason
        public static readonly NO_TRUST_ANCHOR: java.security.cert.PKIXReason
        public static readonly UNRECOGNIZED_CRIT_EXT: java.security.cert.PKIXReason
        public static readonly NOT_CA_CERT: java.security.cert.PKIXReason
        public static readonly PATH_TOO_LONG: java.security.cert.PKIXReason
        public static readonly INVALID_NAME: java.security.cert.PKIXReason
        public static values(): java.security.cert.PKIXReason[]
        public static valueOf(arg0: java.lang.String): java.security.cert.PKIXReason
      }

    }
  }
}
