declare namespace sun {
    namespace security {
        namespace x509 {
            class X509CertInfo implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static readonly IDENT: string
                public static readonly NAME: string
                public static readonly DN_NAME: string
                public static readonly VERSION: string
                public static readonly SERIAL_NUMBER: string
                public static readonly ALGORITHM_ID: string
                public static readonly ISSUER: string
                public static readonly SUBJECT: string
                public static readonly VALIDITY: string
                public static readonly KEY: string
                public static readonly ISSUER_ID: string
                public static readonly SUBJECT_ID: string
                public static readonly EXTENSIONS: string
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
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
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