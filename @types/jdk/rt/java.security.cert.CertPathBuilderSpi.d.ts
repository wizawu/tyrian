declare namespace java {
    namespace security {
        namespace cert {
            abstract class CertPathBuilderSpi {
                public constructor()
                public abstract engineBuild(arg0: java.security.cert.CertPathParameters): java.security.cert.CertPathBuilderResult
                public engineGetRevocationChecker(): java.security.cert.CertPathChecker
                public static class: java.lang.Class<any>
            }
            interface CertPathBuilderSpi$$Lambda {
                (arg0: java.security.cert.CertPathParameters): java.security.cert.CertPathBuilderResult
            }
        }
    }
}