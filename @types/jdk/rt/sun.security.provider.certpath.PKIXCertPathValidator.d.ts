declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class PKIXCertPathValidator extends java.security.cert.CertPathValidatorSpi {
                    public constructor()
                    public engineGetRevocationChecker(): java.security.cert.CertPathChecker
                    public engineValidate(arg0: java.security.cert.CertPath, arg1: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}