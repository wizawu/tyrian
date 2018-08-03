declare namespace java {
    namespace security {
        namespace cert {
            abstract class CertificateFactorySpi {
                public constructor()
                public abstract engineGenerateCertificate(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.Certificate
                public engineGenerateCertPath(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.CertPath
                public engineGenerateCertPath(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): java.security.cert.CertPath
                public engineGenerateCertPath(arg0: java.util.List<java.security.cert.Certificate>): java.security.cert.CertPath
                public engineGetCertPathEncodings(): java.util.Iterator<java.lang.String>
                public abstract engineGenerateCertificates(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.util.Collection<java.security.cert.Certificate>
                public abstract engineGenerateCRL(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.CRL
                public abstract engineGenerateCRLs(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.util.Collection<java.security.cert.CRL>
                public static class: java.lang.Class<any>
            }
        }
    }
}