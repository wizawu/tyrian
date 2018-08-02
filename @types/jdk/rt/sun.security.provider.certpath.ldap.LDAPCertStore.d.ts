declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                namespace ldap {
                    class LDAPCertStore extends java.security.cert.CertStoreSpi {
                        public constructor(arg0: java.security.cert.CertStoreParameters)
                        public engineGetCertificates(arg0: java.security.cert.CertSelector): java.util.Collection<java.security.cert.X509Certificate>
                        public engineGetCRLs(arg0: java.security.cert.CRLSelector): java.util.Collection<java.security.cert.X509CRL>
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}