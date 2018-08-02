declare namespace javax {
    namespace security {
        namespace cert {
            abstract class X509Certificate extends javax.security.cert.Certificate {
                public constructor()
                public static getInstance(arg0: java.io.InputStream): javax.security.cert.X509Certificate
                public static getInstance(arg0: byte[]): javax.security.cert.X509Certificate
                public checkValidity(): void
                public checkValidity(arg0: java.util.Date): void
                public getVersion(): int
                public getSerialNumber(): java.math.BigInteger
                public getIssuerDN(): java.security.Principal
                public getSubjectDN(): java.security.Principal
                public getNotBefore(): java.util.Date
                public getNotAfter(): java.util.Date
                public getSigAlgName(): string
                public getSigAlgOID(): string
                public getSigAlgParams(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}