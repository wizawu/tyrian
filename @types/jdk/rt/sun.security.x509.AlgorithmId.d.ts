declare namespace sun {
    namespace security {
        namespace x509 {
class AlgorithmId implements java.io.Serializable , sun.security.util.DerEncoder {
    protected params: sun.security.util.DerValue
    public static MD2_oid: sun.security.util.ObjectIdentifier
    public static MD5_oid: sun.security.util.ObjectIdentifier
    public static SHA_oid: sun.security.util.ObjectIdentifier
    public static SHA224_oid: sun.security.util.ObjectIdentifier
    public static SHA256_oid: sun.security.util.ObjectIdentifier
    public static SHA384_oid: sun.security.util.ObjectIdentifier
    public static SHA512_oid: sun.security.util.ObjectIdentifier
    public static DH_oid: sun.security.util.ObjectIdentifier
    public static DH_PKIX_oid: sun.security.util.ObjectIdentifier
    public static DSA_oid: sun.security.util.ObjectIdentifier
    public static DSA_OIW_oid: sun.security.util.ObjectIdentifier
    public static EC_oid: sun.security.util.ObjectIdentifier
    public static ECDH_oid: sun.security.util.ObjectIdentifier
    public static RSA_oid: sun.security.util.ObjectIdentifier
    public static RSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static AES_oid: sun.security.util.ObjectIdentifier
    public static md2WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static md5WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static sha1WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static sha1WithRSAEncryption_OIW_oid: sun.security.util.ObjectIdentifier
    public static sha224WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static sha256WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static sha384WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static sha512WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
    public static shaWithDSA_OIW_oid: sun.security.util.ObjectIdentifier
    public static sha1WithDSA_OIW_oid: sun.security.util.ObjectIdentifier
    public static sha1WithDSA_oid: sun.security.util.ObjectIdentifier
    public static sha224WithDSA_oid: sun.security.util.ObjectIdentifier
    public static sha256WithDSA_oid: sun.security.util.ObjectIdentifier
    public static sha1WithECDSA_oid: sun.security.util.ObjectIdentifier
    public static sha224WithECDSA_oid: sun.security.util.ObjectIdentifier
    public static sha256WithECDSA_oid: sun.security.util.ObjectIdentifier
    public static sha384WithECDSA_oid: sun.security.util.ObjectIdentifier
    public static sha512WithECDSA_oid: sun.security.util.ObjectIdentifier
    public static specifiedWithECDSA_oid: sun.security.util.ObjectIdentifier
    public static pbeWithMD5AndDES_oid: sun.security.util.ObjectIdentifier
    public static pbeWithMD5AndRC2_oid: sun.security.util.ObjectIdentifier
    public static pbeWithSHA1AndDES_oid: sun.security.util.ObjectIdentifier
    public static pbeWithSHA1AndRC2_oid: sun.security.util.ObjectIdentifier
    public static pbeWithSHA1AndDESede_oid: sun.security.util.ObjectIdentifier
    public static pbeWithSHA1AndRC2_40_oid: sun.security.util.ObjectIdentifier
    public constructor()
    public constructor(arg0: sun.security.util.ObjectIdentifier)
    public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: java.security.AlgorithmParameters)
    protected decodeParams(): void
    public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public encode(): byte[]
    public getOID(): sun.security.util.ObjectIdentifier
    public getName(): string
    public getParameters(): java.security.AlgorithmParameters
    public getEncodedParams(): byte[]
    public equals(arg0: sun.security.x509.AlgorithmId | sun.security.x509.AlgorithmId$$Lambda): boolean
    public equals(arg0: java.lang.Object): boolean
    public equals(arg0: sun.security.util.ObjectIdentifier): boolean
    public hashCode(): int
    protected paramsToString(): string
    public toString(): string
    public static parse(arg0: sun.security.util.DerValue): sun.security.x509.AlgorithmId
    public static getAlgorithmId(arg0: java.lang.String | string): sun.security.x509.AlgorithmId
    public static get(arg0: java.lang.String | string): sun.security.x509.AlgorithmId
    public static get(arg0: java.security.AlgorithmParameters): sun.security.x509.AlgorithmId
    public static makeSigAlg(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public static getEncAlgFromSigAlg(arg0: java.lang.String | string): string
    public static getDigAlgFromSigAlg(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

class AlgorithmId$$Lambda implements java.io.Serializable , sun.security.util.DerEncoder {
    protected params: sun.security.util.DerValue
}

        }
    }
}