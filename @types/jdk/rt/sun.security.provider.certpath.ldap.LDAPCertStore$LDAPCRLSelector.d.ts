declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                namespace ldap {
                    class LDAPCertStore$LDAPCRLSelector extends java.security.cert.X509CRLSelector {
                        public getIssuers(): java.util.Collection<javax.security.auth.x500.X500Principal>
                        public getIssuerNames(): java.util.Collection<java.lang.Object>
                        public getMinCRL(): java.math.BigInteger
                        public getMaxCRL(): java.math.BigInteger
                        public getDateAndTime(): java.util.Date
                        public getCertificateChecking(): java.security.cert.X509Certificate
                        public match(arg0: java.security.cert.CRL): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}