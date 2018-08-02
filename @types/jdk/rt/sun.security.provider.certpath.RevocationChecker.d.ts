declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class RevocationChecker extends java.security.cert.PKIXRevocationChecker {
                    public init(arg0: boolean): void
                    public isForwardCheckingSupported(): boolean
                    public getSupportedExtensions(): java.util.Set<java.lang.String>
                    public getSoftFailExceptions(): java.util.List<java.security.cert.CertPathValidatorException>
                    public check(arg0: java.security.cert.Certificate, arg1: java.util.Collection<java.lang.String>): void
                    public clone(): sun.security.provider.certpath.RevocationChecker
                    public clone(): java.security.cert.PKIXRevocationChecker
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}