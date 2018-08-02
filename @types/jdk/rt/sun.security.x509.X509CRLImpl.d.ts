declare namespace sun {
    namespace security {
        namespace x509 {
            class X509CRLImpl extends java.security.cert.X509CRL implements sun.security.util.DerEncoder {
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: sun.security.x509.X500Name, arg1: java.util.Date, arg2: java.util.Date)
                public constructor(arg0: sun.security.x509.X500Name, arg1: java.util.Date, arg2: java.util.Date, arg3: java.security.cert.X509CRLEntry[])
                public constructor(arg0: sun.security.x509.X500Name, arg1: java.util.Date, arg2: java.util.Date, arg3: java.security.cert.X509CRLEntry[], arg4: sun.security.x509.CRLExtensions)
                public getEncodedInternal(): byte[]
                public getEncoded(): byte[]
                public encodeInfo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public verify(arg0: java.security.PublicKey): void
                public verify(arg0: java.security.PublicKey, arg1: java.lang.String | string): void
                public verify(arg0: java.security.PublicKey, arg1: java.security.Provider): void
                public static verify(arg0: java.security.cert.X509CRL, arg1: java.security.PublicKey, arg2: java.security.Provider): void
                public sign(arg0: java.security.PrivateKey, arg1: java.lang.String | string): void
                public sign(arg0: java.security.PrivateKey, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                public toString(): string
                public toStringWithAlgName(arg0: java.lang.String | string): string
                public isRevoked(arg0: java.security.cert.Certificate): boolean
                public getVersion(): int
                public getIssuerDN(): java.security.Principal
                public getIssuerX500Principal(): javax.security.auth.x500.X500Principal
                public getThisUpdate(): java.util.Date
                public getNextUpdate(): java.util.Date
                public getRevokedCertificate(arg0: java.math.BigInteger): java.security.cert.X509CRLEntry
                public getRevokedCertificate(arg0: java.security.cert.X509Certificate): java.security.cert.X509CRLEntry
                public getRevokedCertificates(): java.util.Set<java.security.cert.X509CRLEntry>
                public getTBSCertList(): byte[]
                public getSignature(): byte[]
                public getSigAlgName(): string
                public getSigAlgOID(): string
                public getSigAlgParams(): byte[]
                public getSigAlgId(): sun.security.x509.AlgorithmId
                public getAuthKeyId(): sun.security.x509.KeyIdentifier
                public getAuthKeyIdExtension(): sun.security.x509.AuthorityKeyIdentifierExtension
                public getCRLNumberExtension(): sun.security.x509.CRLNumberExtension
                public getCRLNumber(): java.math.BigInteger
                public getDeltaCRLIndicatorExtension(): sun.security.x509.DeltaCRLIndicatorExtension
                public getBaseCRLNumber(): java.math.BigInteger
                public getIssuerAltNameExtension(): sun.security.x509.IssuerAlternativeNameExtension
                public getIssuingDistributionPointExtension(): sun.security.x509.IssuingDistributionPointExtension
                public hasUnsupportedCriticalExtension(): boolean
                public getCriticalExtensionOIDs(): java.util.Set<java.lang.String>
                public getNonCriticalExtensionOIDs(): java.util.Set<java.lang.String>
                public getExtensionValue(arg0: java.lang.String | string): byte[]
                public getExtension(arg0: sun.security.util.ObjectIdentifier): java.lang.Object
                public static getIssuerX500Principal(arg0: java.security.cert.X509CRL): javax.security.auth.x500.X500Principal
                public static getEncodedInternal(arg0: java.security.cert.X509CRL): byte[]
                public static toImpl(arg0: java.security.cert.X509CRL): sun.security.x509.X509CRLImpl
                public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static class: java.lang.Class<any>
            }
            class X509CRLImpl$$Lambda extends java.security.cert.X509CRL implements sun.security.util.DerEncoder {
                public constructor(arg0: byte[])
            }
        }
    }
}