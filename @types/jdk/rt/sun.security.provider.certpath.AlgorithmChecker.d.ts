declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class AlgorithmChecker extends java.security.cert.PKIXCertPathChecker {
    public constructor(arg0: java.security.cert.TrustAnchor, arg1: java.lang.String | string)
    public constructor(arg0: java.security.AlgorithmConstraints, arg1: java.security.Timestamp, arg2: java.lang.String | string)
    public constructor(arg0: java.security.cert.TrustAnchor, arg1: java.security.AlgorithmConstraints, arg2: java.util.Date, arg3: java.security.Timestamp, arg4: java.lang.String | string)
    public constructor(arg0: java.security.cert.TrustAnchor, arg1: java.util.Date, arg2: java.lang.String | string)
    public init(arg0: boolean): void
    public isForwardCheckingSupported(): boolean
    public getSupportedExtensions(): java.util.Set<java.lang.String>
    public check(arg0: java.security.cert.Certificate, arg1: java.util.Collection<java.lang.String>): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}