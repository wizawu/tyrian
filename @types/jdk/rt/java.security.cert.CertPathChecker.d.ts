declare namespace java {
    namespace security {
        namespace cert {
interface CertPathChecker {
    init(arg0: boolean): void
    isForwardCheckingSupported(): boolean
    check(arg0: java.security.cert.Certificate): void
}

        }
    }
}