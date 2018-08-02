declare namespace java {
    namespace security {
        namespace cert {
class CertificateRevokedException extends java.security.cert.CertificateException {
    public constructor(arg0: java.util.Date, arg1: java.security.cert.CRLReason, arg2: javax.security.auth.x500.X500Principal, arg3: java.util.Map<java.lang.String, java.security.cert.Extension>)
    public getRevocationDate(): java.util.Date
    public getRevocationReason(): java.security.cert.CRLReason
    public getAuthorityName(): javax.security.auth.x500.X500Principal
    public getInvalidityDate(): java.util.Date
    public getExtensions(): java.util.Map<java.lang.String, java.security.cert.Extension>
    public getMessage(): string
    public static class: java.lang.Class<any>
}

        }
    }
}