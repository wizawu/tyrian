declare namespace sun {
    namespace security {
        namespace pkcs {
            class PKCS7 {
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.x509.AlgorithmId[], arg1: sun.security.pkcs.ContentInfo, arg2: java.security.cert.X509Certificate[], arg3: java.security.cert.X509CRL[], arg4: sun.security.pkcs.SignerInfo[])
                public constructor(arg0: sun.security.x509.AlgorithmId[], arg1: sun.security.pkcs.ContentInfo, arg2: java.security.cert.X509Certificate[], arg3: sun.security.pkcs.SignerInfo[])
                public encodeSignedData(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public encodeSignedData(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
                public verify(arg0: sun.security.pkcs.SignerInfo | sun.security.pkcs.SignerInfo$$Lambda, arg1: byte[]): sun.security.pkcs.SignerInfo
                public verify(arg0: byte[]): sun.security.pkcs.SignerInfo[]
                public verify(): sun.security.pkcs.SignerInfo[]
                public getVersion(): java.math.BigInteger
                public getDigestAlgorithmIds(): sun.security.x509.AlgorithmId[]
                public getContentInfo(): sun.security.pkcs.ContentInfo
                public getCertificates(): java.security.cert.X509Certificate[]
                public getCRLs(): java.security.cert.X509CRL[]
                public getSignerInfos(): sun.security.pkcs.SignerInfo[]
                public getCertificate(arg0: java.math.BigInteger, arg1: sun.security.x509.X500Name): java.security.cert.X509Certificate
                public toString(): string
                public isOldStyle(): boolean
                public static generateSignedData(arg0: byte[], arg1: java.security.cert.X509Certificate[], arg2: byte[], arg3: java.lang.String | string, arg4: java.net.URI, arg5: java.lang.String | string, arg6: java.lang.String | string): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}