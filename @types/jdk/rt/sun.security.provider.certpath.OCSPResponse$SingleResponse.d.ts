declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class OCSPResponse$SingleResponse implements sun.security.provider.certpath.OCSP$RevocationStatus {
                    public getCertStatus(): sun.security.provider.certpath.OCSP$RevocationStatus$CertStatus
                    public getCertId(): sun.security.provider.certpath.CertId
                    public getThisUpdate(): java.util.Date
                    public getNextUpdate(): java.util.Date
                    public getRevocationTime(): java.util.Date
                    public getRevocationReason(): java.security.cert.CRLReason
                    public getSingleExtensions(): java.util.Map<java.lang.String, java.security.cert.Extension>
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}