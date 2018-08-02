declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                interface OCSP$RevocationStatus {
                    getCertStatus(): sun.security.provider.certpath.OCSP$RevocationStatus$CertStatus
                    getRevocationTime(): java.util.Date
                    getRevocationReason(): java.security.cert.CRLReason
                    getSingleExtensions(): java.util.Map<java.lang.String, java.security.cert.Extension>
                }
            }
        }
    }
}