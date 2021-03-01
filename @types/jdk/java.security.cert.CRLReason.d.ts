declare namespace java {
  namespace security {
    namespace cert {

      class CRLReason extends java.lang.Enum<java.security.cert.CRLReason> {

        public static readonly UNSPECIFIED: java.security.cert.CRLReason
        public static readonly KEY_COMPROMISE: java.security.cert.CRLReason
        public static readonly CA_COMPROMISE: java.security.cert.CRLReason
        public static readonly AFFILIATION_CHANGED: java.security.cert.CRLReason
        public static readonly SUPERSEDED: java.security.cert.CRLReason
        public static readonly CESSATION_OF_OPERATION: java.security.cert.CRLReason
        public static readonly CERTIFICATE_HOLD: java.security.cert.CRLReason
        public static readonly UNUSED: java.security.cert.CRLReason
        public static readonly REMOVE_FROM_CRL: java.security.cert.CRLReason
        public static readonly PRIVILEGE_WITHDRAWN: java.security.cert.CRLReason
        public static readonly AA_COMPROMISE: java.security.cert.CRLReason
        public static values(): java.security.cert.CRLReason[]
        public static valueOf(arg0: java.lang.String): java.security.cert.CRLReason
      }

    }
  }
}
