declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificatePolicySet {
                public constructor(arg0: java.util.Vector<sun.security.x509.CertificatePolicyId>)
                public constructor(arg0: sun.security.util.DerInputStream)
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
                public getCertPolicyIds(): java.util.List<sun.security.x509.CertificatePolicyId>
                public static class: java.lang.Class<any>
            }
        }
    }
}