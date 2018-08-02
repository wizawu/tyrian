declare namespace sun {
    namespace security {
        namespace validator {
class ValidatorException extends java.security.cert.CertificateException {
    public static T_NO_TRUST_ANCHOR: java.lang.Object
    public static T_EE_EXTENSIONS: java.lang.Object
    public static T_CA_EXTENSIONS: java.lang.Object
    public static T_CERT_EXPIRED: java.lang.Object
    public static T_SIGNATURE_ERROR: java.lang.Object
    public static T_NAME_CHAINING: java.lang.Object
    public static T_ALGORITHM_DISABLED: java.lang.Object
    public static T_UNTRUSTED_CERT: java.lang.Object
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
    public constructor(arg0: java.lang.Object)
    public constructor(arg0: java.lang.Object, arg1: java.security.cert.X509Certificate)
    public constructor(arg0: java.lang.Object, arg1: java.security.cert.X509Certificate, arg2: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.security.cert.X509Certificate)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.security.cert.X509Certificate, arg3: java.lang.Throwable)
    public getErrorType(): java.lang.Object
    public getErrorCertificate(): java.security.cert.X509Certificate
    public static class: java.lang.Class<any>
}

        }
    }
}