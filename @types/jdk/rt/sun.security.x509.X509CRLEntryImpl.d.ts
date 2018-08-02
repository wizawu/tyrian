declare namespace sun {
    namespace security {
        namespace x509 {
            class X509CRLEntryImpl extends java.security.cert.X509CRLEntry implements java.lang.Comparable<sun.security.x509.X509CRLEntryImpl> {
                public constructor(arg0: java.math.BigInteger, arg1: java.util.Date)
                public constructor(arg0: java.math.BigInteger, arg1: java.util.Date, arg2: sun.security.x509.CRLExtensions)
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.util.DerValue)
                public hasExtensions(): boolean
                public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
                public getEncoded(): byte[]
                public getCertificateIssuer(): javax.security.auth.x500.X500Principal
                public getSerialNumber(): java.math.BigInteger
                public getRevocationDate(): java.util.Date
                public getRevocationReason(): java.security.cert.CRLReason
                public static getRevocationReason(arg0: java.security.cert.X509CRLEntry): java.security.cert.CRLReason
                public getReasonCode(): java.lang.Integer
                public toString(): string
                public hasUnsupportedCriticalExtension(): boolean
                public getCriticalExtensionOIDs(): java.util.Set<java.lang.String>
                public getNonCriticalExtensionOIDs(): java.util.Set<java.lang.String>
                public getExtensionValue(arg0: java.lang.String | string): byte[]
                public getExtension(arg0: sun.security.util.ObjectIdentifier): sun.security.x509.Extension
                public static toImpl(arg0: java.security.cert.X509CRLEntry): sun.security.x509.X509CRLEntryImpl
                public getExtensions(): java.util.Map<java.lang.String, java.security.cert.Extension>
                public compareTo(arg0: sun.security.x509.X509CRLEntryImpl): int
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
        }
    }
}