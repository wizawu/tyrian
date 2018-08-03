declare namespace java {
    namespace security {
        namespace cert {
            class CertificateFactory {
                protected constructor(arg0: java.security.cert.CertificateFactorySpi, arg1: java.security.Provider, arg2: java.lang.String | string)
                public static getInstance(arg0: java.lang.String | string): java.security.cert.CertificateFactory
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.cert.CertificateFactory
                public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.cert.CertificateFactory
                public getProvider(): java.security.Provider
                public getType(): string
                public generateCertificate(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.Certificate
                public getCertPathEncodings(): java.util.Iterator<java.lang.String>
                public generateCertPath(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.CertPath
                public generateCertPath(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): java.security.cert.CertPath
                public generateCertPath(arg0: java.util.List<java.security.cert.Certificate>): java.security.cert.CertPath
                public generateCertificates(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.util.Collection<java.security.cert.Certificate>
                public generateCRL(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.security.cert.CRL
                public generateCRLs(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.util.Collection<java.security.cert.CRL>
                public static class: java.lang.Class<any>
            }
        }
    }
}