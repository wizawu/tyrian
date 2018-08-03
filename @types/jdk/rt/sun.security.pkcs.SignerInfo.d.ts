declare namespace sun {
    namespace security {
        namespace pkcs {
            class SignerInfo implements sun.security.util.DerEncoder {
                public constructor(arg0: sun.security.x509.X500Name, arg1: java.math.BigInteger, arg2: sun.security.x509.AlgorithmId, arg3: sun.security.x509.AlgorithmId, arg4: byte[])
                public constructor(arg0: sun.security.x509.X500Name, arg1: java.math.BigInteger, arg2: sun.security.x509.AlgorithmId, arg3: sun.security.pkcs.PKCS9Attributes, arg4: sun.security.x509.AlgorithmId, arg5: byte[], arg6: sun.security.pkcs.PKCS9Attributes)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: sun.security.util.DerInputStream, arg1: boolean)
                public encode(arg0: sun.security.util.DerOutputStream): void
                public derEncode(arg0: java.io.OutputStream): void
                public getCertificate(arg0: sun.security.pkcs.PKCS7): java.security.cert.X509Certificate
                public getCertificateChain(arg0: sun.security.pkcs.PKCS7): java.util.ArrayList<java.security.cert.X509Certificate>
                public getVersion(): java.math.BigInteger
                public getIssuerName(): sun.security.x509.X500Name
                public getCertificateSerialNumber(): java.math.BigInteger
                public getDigestAlgorithmId(): sun.security.x509.AlgorithmId
                public getAuthenticatedAttributes(): sun.security.pkcs.PKCS9Attributes
                public getDigestEncryptionAlgorithmId(): sun.security.x509.AlgorithmId
                public getEncryptedDigest(): byte[]
                public getUnauthenticatedAttributes(): sun.security.pkcs.PKCS9Attributes
                public getTsToken(): sun.security.pkcs.PKCS7
                public getTimestamp(): java.security.Timestamp
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}