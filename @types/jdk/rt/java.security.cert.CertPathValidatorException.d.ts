declare namespace java {
    namespace security {
        namespace cert {
class CertPathValidatorException extends java.security.GeneralSecurityException {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: java.security.cert.CertPath, arg3: int)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: java.security.cert.CertPath, arg3: int, arg4: java.security.cert.CertPathValidatorException$Reason)
    public getCertPath(): java.security.cert.CertPath
    public getIndex(): int
    public getReason(): java.security.cert.CertPathValidatorException$Reason
    public static class: java.lang.Class<any>
}

        }
    }
}