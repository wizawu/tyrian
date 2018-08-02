declare namespace sun {
    namespace security {
        namespace validator {
class PKIXValidator extends sun.security.validator.Validator {
    public getTrustedCertificates(): java.util.Collection<java.security.cert.X509Certificate>
    public getCertPathLength(): int
    public getParameters(): java.security.cert.PKIXBuilderParameters
    public static class: java.lang.Class<any>
}

        }
    }
}