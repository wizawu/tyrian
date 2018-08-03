declare namespace com {
    namespace sun {
        namespace security {
            namespace cert {
                namespace internal {
                    namespace x509 {
                        class X509V1CertImpl extends javax.security.cert.X509Certificate implements java.io.Serializable {
                            public constructor()
                            public constructor(arg0: byte[])
                            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                            public getEncoded(): byte[]
                            public verify(arg0: java.security.PublicKey): void
                            public verify(arg0: java.security.PublicKey, arg1: java.lang.String | string): void
                            public checkValidity(): void
                            public checkValidity(arg0: java.util.Date): void
                            public toString(): string
                            public getPublicKey(): java.security.PublicKey
                            public getVersion(): int
                            public getSerialNumber(): java.math.BigInteger
                            public getSubjectDN(): java.security.Principal
                            public getIssuerDN(): java.security.Principal
                            public getNotBefore(): java.util.Date
                            public getNotAfter(): java.util.Date
                            public getSigAlgName(): string
                            public getSigAlgOID(): string
                            public getSigAlgParams(): byte[]
                            public getX509Certificate(): java.security.cert.X509Certificate
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}