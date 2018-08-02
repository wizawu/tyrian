declare namespace java {
    namespace security {
        namespace cert {
abstract class CertificateFactorySpi {
    public constructor()
    public engineGenerateCertificate(arg0: java.io.InputStream): java.security.cert.Certificate
    public engineGenerateCertPath(arg0: java.io.InputStream): java.security.cert.CertPath
    public engineGenerateCertPath(arg0: java.io.InputStream, arg1: java.lang.String | string): java.security.cert.CertPath
    public engineGenerateCertPath(arg0: java.util.List<java.security.cert.Certificate>): java.security.cert.CertPath
    public engineGetCertPathEncodings(): java.util.Iterator<java.lang.String>
    public engineGenerateCertificates(arg0: java.io.InputStream): java.util.Collection<java.security.cert.Certificate>
    public engineGenerateCRL(arg0: java.io.InputStream): java.security.cert.CRL
    public engineGenerateCRLs(arg0: java.io.InputStream): java.util.Collection<java.security.cert.CRL>
    public static class: java.lang.Class<any>
}

        }
    }
}