declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificatePolicyMap {
                public constructor(arg0: sun.security.x509.CertificatePolicyId, arg1: sun.security.x509.CertificatePolicyId)
                public constructor(arg0: sun.security.util.DerValue)
                public getIssuerIdentifier(): sun.security.x509.CertificatePolicyId
                public getSubjectIdentifier(): sun.security.x509.CertificatePolicyId
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream): void
                public static class: java.lang.Class<any>
            }
        }
    }
}