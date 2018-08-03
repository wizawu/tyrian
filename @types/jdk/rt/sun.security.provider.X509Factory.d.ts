declare namespace sun {
    namespace security {
        namespace provider {
            class X509Factory extends java.security.cert.CertificateFactorySpi {
                public static readonly BEGIN_CERT: string
                public static readonly END_CERT: string
                public constructor()
                public engineGenerateCertificate(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.Certificate
                public static intern(arg0: java.security.cert.X509Certificate): sun.security.x509.X509CertImpl
                public static intern(arg0: java.security.cert.X509CRL): sun.security.x509.X509CRLImpl
                public engineGenerateCertPath(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.CertPath
                public engineGenerateCertPath(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): java.security.cert.CertPath
                public engineGenerateCertPath(arg0: java.util.List<java.security.cert.Certificate>): java.security.cert.CertPath
                public engineGetCertPathEncodings(): java.util.Iterator<java.lang.String>
                public engineGenerateCertificates(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.util.Collection<java.security.cert.Certificate>
                public engineGenerateCRL(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.CRL
                public engineGenerateCRLs(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.util.Collection<java.security.cert.CRL>
                public static class: java.lang.Class<any>
            }
        }
    }
}