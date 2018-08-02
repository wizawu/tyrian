declare namespace java {
    namespace security {
        namespace cert {
            abstract class X509CRLEntry implements java.security.cert.X509Extension {
                public constructor()
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public getEncoded(): byte[]
                public getSerialNumber(): java.math.BigInteger
                public getCertificateIssuer(): javax.security.auth.x500.X500Principal
                public getRevocationDate(): java.util.Date
                public hasExtensions(): boolean
                public toString(): string
                public getRevocationReason(): java.security.cert.CRLReason
                public static class: java.lang.Class<any>
            }
        }
    }
}