declare namespace sun {
    namespace security {
        namespace x509 {
            class X509CertInfo implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static IDENT: string
                public static NAME: string
                public static DN_NAME: string
                public static VERSION: string
                public static SERIAL_NUMBER: string
                public static ALGORITHM_ID: string
                public static ISSUER: string
                public static SUBJECT: string
                public static VALIDITY: string
                public static KEY: string
                public static ISSUER_ID: string
                public static SUBJECT_ID: string
                public static EXTENSIONS: string
                protected version: sun.security.x509.CertificateVersion
                protected serialNum: sun.security.x509.CertificateSerialNumber
                protected algId: sun.security.x509.CertificateAlgorithmId
                protected issuer: sun.security.x509.X500Name
                protected subject: sun.security.x509.X500Name
                protected interval: sun.security.x509.CertificateValidity
                protected pubKey: sun.security.x509.CertificateX509Key
                protected issuerUniqueId: sun.security.x509.UniqueIdentity
                protected subjectUniqueId: sun.security.x509.UniqueIdentity
                protected extensions: sun.security.x509.CertificateExtensions
                public constructor()
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.util.DerValue)
                public encode(arg0: java.io.OutputStream): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public getEncodedInfo(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: sun.security.x509.X509CertInfo): boolean
                public hashCode(): int
                public toString(): string
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public delete(arg0: java.lang.String | string): void
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}