declare namespace java {
    namespace security {
        namespace cert {
class CertPathValidatorException$BasicReason extends java.lang.Enum<java.security.cert.CertPathValidatorException$BasicReason> implements java.security.cert.CertPathValidatorException$Reason {
    public static UNSPECIFIED: java.security.cert.CertPathValidatorException$BasicReason
    public static EXPIRED: java.security.cert.CertPathValidatorException$BasicReason
    public static NOT_YET_VALID: java.security.cert.CertPathValidatorException$BasicReason
    public static REVOKED: java.security.cert.CertPathValidatorException$BasicReason
    public static UNDETERMINED_REVOCATION_STATUS: java.security.cert.CertPathValidatorException$BasicReason
    public static INVALID_SIGNATURE: java.security.cert.CertPathValidatorException$BasicReason
    public static ALGORITHM_CONSTRAINED: java.security.cert.CertPathValidatorException$BasicReason
    public static values(): java.security.cert.CertPathValidatorException$BasicReason[]
    public static valueOf(arg0: java.lang.String | string): java.security.cert.CertPathValidatorException$BasicReason
    public static class: java.lang.Class<any>
}

        }
    }
}