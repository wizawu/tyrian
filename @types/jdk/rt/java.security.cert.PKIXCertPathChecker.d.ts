declare namespace java {
    namespace security {
        namespace cert {
            abstract class PKIXCertPathChecker implements java.security.cert.CertPathChecker , java.lang.Cloneable {
                protected constructor()
                public init(arg0: boolean): void
                public isForwardCheckingSupported(): boolean
                public getSupportedExtensions(): java.util.Set<java.lang.String>
                public check(arg0: java.security.cert.Certificate, arg1: java.util.Collection<java.lang.String>): void
                public check(arg0: java.security.cert.Certificate): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}