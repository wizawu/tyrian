declare namespace javax {
    namespace security {
        namespace cert {
            abstract class X509Certificate extends javax.security.cert.Certificate {
                public constructor()
                public static getInstance(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.security.cert.X509Certificate
                public static getInstance(arg0: byte[]): javax.security.cert.X509Certificate
                public abstract checkValidity(): void
                public abstract checkValidity(arg0: java.util.Date): void
                public abstract getVersion(): int
                public abstract getSerialNumber(): java.math.BigInteger
                public abstract getIssuerDN(): java.security.Principal
                public abstract getSubjectDN(): java.security.Principal
                public abstract getNotBefore(): java.util.Date
                public abstract getNotAfter(): java.util.Date
                public abstract getSigAlgName(): string
                public abstract getSigAlgOID(): string
                public abstract getSigAlgParams(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}