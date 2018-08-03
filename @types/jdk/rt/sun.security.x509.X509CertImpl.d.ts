declare namespace sun {
    namespace security {
        namespace x509 {
            class X509CertImpl extends java.security.cert.X509Certificate implements sun.security.util.DerEncoder {
                public static NAME: string
                public static INFO: string
                public static ALG_ID: string
                public static SIGNATURE: string
                public static SIGNED_CERT: string
                public static SUBJECT_DN: string
                public static ISSUER_DN: string
                public static SERIAL_ID: string
                public static PUBLIC_KEY: string
                public static VERSION: string
                public static SIG_ALG: string
                public static SIG: string
                protected info: sun.security.x509.X509CertInfo
                protected algId: sun.security.x509.AlgorithmId
                protected signature: byte[]
                public constructor()
                public constructor(arg0: byte[])
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: sun.security.x509.X509CertInfo)
                public constructor(arg0: sun.security.util.DerValue)
                public encode(arg0: java.io.OutputStream): void
                public derEncode(arg0: java.io.OutputStream): void
                public getEncoded(): byte[]
                public getEncodedInternal(): byte[]
                public verify(arg0: java.security.PublicKey): void
                public verify(arg0: java.security.PublicKey, arg1: java.lang.String | string): void
                public verify(arg0: java.security.PublicKey, arg1: java.security.Provider): void
                public static verify(arg0: java.security.cert.X509Certificate, arg1: java.security.PublicKey, arg2: java.security.Provider): void
                public sign(arg0: java.security.PrivateKey, arg1: java.lang.String | string): void
                public sign(arg0: java.security.PrivateKey, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                public checkValidity(): void
                public checkValidity(arg0: java.util.Date): void
                public get(arg0: java.lang.String | string): java.lang.Object
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public toString(): string
                public getPublicKey(): java.security.PublicKey
                public getVersion(): int
                public getSerialNumber(): java.math.BigInteger
                public getSerialNumberObject(): sun.security.x509.SerialNumber
                public getSubjectDN(): java.security.Principal
                public getSubjectX500Principal(): javax.security.auth.x500.X500Principal
                public getIssuerDN(): java.security.Principal
                public getIssuerX500Principal(): javax.security.auth.x500.X500Principal
                public getNotBefore(): java.util.Date
                public getNotAfter(): java.util.Date
                public getTBSCertificate(): byte[]
                public getSignature(): byte[]
                public getSigAlgName(): string
                public getSigAlgOID(): string
                public getSigAlgParams(): byte[]
                public getIssuerUniqueID(): boolean[]
                public getSubjectUniqueID(): boolean[]
                public getAuthKeyId(): sun.security.x509.KeyIdentifier
                public getSubjectKeyId(): sun.security.x509.KeyIdentifier
                public getAuthorityKeyIdentifierExtension(): sun.security.x509.AuthorityKeyIdentifierExtension
                public getBasicConstraintsExtension(): sun.security.x509.BasicConstraintsExtension
                public getCertificatePoliciesExtension(): sun.security.x509.CertificatePoliciesExtension
                public getExtendedKeyUsageExtension(): sun.security.x509.ExtendedKeyUsageExtension
                public getIssuerAlternativeNameExtension(): sun.security.x509.IssuerAlternativeNameExtension
                public getNameConstraintsExtension(): sun.security.x509.NameConstraintsExtension
                public getPolicyConstraintsExtension(): sun.security.x509.PolicyConstraintsExtension
                public getPolicyMappingsExtension(): sun.security.x509.PolicyMappingsExtension
                public getPrivateKeyUsageExtension(): sun.security.x509.PrivateKeyUsageExtension
                public getSubjectAlternativeNameExtension(): sun.security.x509.SubjectAlternativeNameExtension
                public getSubjectKeyIdentifierExtension(): sun.security.x509.SubjectKeyIdentifierExtension
                public getCRLDistributionPointsExtension(): sun.security.x509.CRLDistributionPointsExtension
                public hasUnsupportedCriticalExtension(): boolean
                public getCriticalExtensionOIDs(): java.util.Set<java.lang.String>
                public getNonCriticalExtensionOIDs(): java.util.Set<java.lang.String>
                public getExtension(arg0: sun.security.util.ObjectIdentifier): sun.security.x509.Extension
                public getUnparseableExtension(arg0: sun.security.util.ObjectIdentifier): sun.security.x509.Extension
                public getExtensionValue(arg0: java.lang.String | string): byte[]
                public getKeyUsage(): boolean[]
                public getExtendedKeyUsage(): java.util.List<java.lang.String>
                public static getExtendedKeyUsage(arg0: java.security.cert.X509Certificate): java.util.List<java.lang.String>
                public getBasicConstraints(): int
                public getSubjectAlternativeNames(): java.util.Collection<java.util.List<any>>
                public static getSubjectAlternativeNames(arg0: java.security.cert.X509Certificate): java.util.Collection<java.util.List<any>>
                public getIssuerAlternativeNames(): java.util.Collection<java.util.List<any>>
                public static getIssuerAlternativeNames(arg0: java.security.cert.X509Certificate): java.util.Collection<java.util.List<any>>
                public getAuthorityInfoAccessExtension(): sun.security.x509.AuthorityInfoAccessExtension
                public static getSubjectX500Principal(arg0: java.security.cert.X509Certificate): javax.security.auth.x500.X500Principal
                public static getIssuerX500Principal(arg0: java.security.cert.X509Certificate): javax.security.auth.x500.X500Principal
                public static getEncodedInternal(arg0: java.security.cert.Certificate): byte[]
                public static toImpl(arg0: java.security.cert.X509Certificate): sun.security.x509.X509CertImpl
                public static isSelfIssued(arg0: java.security.cert.X509Certificate): boolean
                public static isSelfSigned(arg0: java.security.cert.X509Certificate, arg1: java.lang.String | string): boolean
                public getFingerprint(arg0: java.lang.String | string): string
                public static getFingerprint(arg0: java.lang.String | string, arg1: java.security.cert.X509Certificate): string
                public static class: java.lang.Class<any>
            }
        }
    }
}