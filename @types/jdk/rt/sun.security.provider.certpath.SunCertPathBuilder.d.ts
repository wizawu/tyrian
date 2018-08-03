declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class SunCertPathBuilder extends java.security.cert.CertPathBuilderSpi {
                    public constructor()
                    public engineGetRevocationChecker(): java.security.cert.CertPathChecker
                    public engineBuild(arg0: java.security.cert.CertPathParameters | java.security.cert.CertPathParameters$$Lambda): java.security.cert.CertPathBuilderResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}