declare namespace java {
    namespace security {
        namespace cert {
abstract class PKIXRevocationChecker extends java.security.cert.PKIXCertPathChecker {
    protected constructor()
    public setOcspResponder(arg0: java.net.URI): void
    public getOcspResponder(): java.net.URI
    public setOcspResponderCert(arg0: java.security.cert.X509Certificate): void
    public getOcspResponderCert(): java.security.cert.X509Certificate
    public setOcspExtensions(arg0: java.util.List<java.security.cert.Extension>): void
    public getOcspExtensions(): java.util.List<java.security.cert.Extension>
    public setOcspResponses(arg0: java.util.Map<java.security.cert.X509Certificate, byte[]>): void
    public getOcspResponses(): java.util.Map<java.security.cert.X509Certificate, byte[]>
    public setOptions(arg0: java.util.Set<java.security.cert.PKIXRevocationChecker$Option>): void
    public getOptions(): java.util.Set<java.security.cert.PKIXRevocationChecker$Option>
    public getSoftFailExceptions(): java.util.List<java.security.cert.CertPathValidatorException>
    public clone(): java.security.cert.PKIXRevocationChecker
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}