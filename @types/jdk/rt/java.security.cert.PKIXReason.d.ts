declare namespace java {
    namespace security {
        namespace cert {
            class PKIXReason extends java.lang.Enum<java.security.cert.PKIXReason> implements java.security.cert.CertPathValidatorException$Reason {
                public static NAME_CHAINING: java.security.cert.PKIXReason
                public static INVALID_KEY_USAGE: java.security.cert.PKIXReason
                public static INVALID_POLICY: java.security.cert.PKIXReason
                public static NO_TRUST_ANCHOR: java.security.cert.PKIXReason
                public static UNRECOGNIZED_CRIT_EXT: java.security.cert.PKIXReason
                public static NOT_CA_CERT: java.security.cert.PKIXReason
                public static PATH_TOO_LONG: java.security.cert.PKIXReason
                public static INVALID_NAME: java.security.cert.PKIXReason
                public static values(): java.security.cert.PKIXReason[]
                public static valueOf(arg0: java.lang.String | string): java.security.cert.PKIXReason
                public static class: java.lang.Class<any>
            }
        }
    }
}