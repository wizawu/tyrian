declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class CertId {
    public constructor(arg0: java.security.cert.X509Certificate, arg1: sun.security.x509.SerialNumber)
    public constructor(arg0: javax.security.auth.x500.X500Principal, arg1: java.security.PublicKey, arg2: sun.security.x509.SerialNumber)
    public constructor(arg0: sun.security.util.DerInputStream)
    public getHashAlgorithm(): sun.security.x509.AlgorithmId
    public getIssuerNameHash(): byte[]
    public getIssuerKeyHash(): byte[]
    public getSerialNumber(): java.math.BigInteger
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}