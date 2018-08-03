declare namespace java {
    namespace security {
        namespace cert {
            abstract class CertPathValidatorSpi {
                public constructor()
                public abstract engineValidate(arg0: java.security.cert.CertPath, arg1: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult
                public engineGetRevocationChecker(): java.security.cert.CertPathChecker
                public static class: java.lang.Class<any>
            }
            interface CertPathValidatorSpi$$Lambda {
                (arg0: java.security.cert.CertPath, arg1: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult
            }
        }
    }
}