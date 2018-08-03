declare namespace sun {
    namespace security {
        namespace x509 {
            class AlgorithmId implements java.io.Serializable , sun.security.util.DerEncoder {
                protected params: sun.security.util.DerValue
                public static readonly MD2_oid: sun.security.util.ObjectIdentifier
                public static readonly MD5_oid: sun.security.util.ObjectIdentifier
                public static readonly SHA_oid: sun.security.util.ObjectIdentifier
                public static readonly SHA224_oid: sun.security.util.ObjectIdentifier
                public static readonly SHA256_oid: sun.security.util.ObjectIdentifier
                public static readonly SHA384_oid: sun.security.util.ObjectIdentifier
                public static readonly SHA512_oid: sun.security.util.ObjectIdentifier
                public static readonly DH_oid: sun.security.util.ObjectIdentifier
                public static readonly DH_PKIX_oid: sun.security.util.ObjectIdentifier
                public static readonly DSA_oid: sun.security.util.ObjectIdentifier
                public static readonly DSA_OIW_oid: sun.security.util.ObjectIdentifier
                public static readonly EC_oid: sun.security.util.ObjectIdentifier
                public static readonly ECDH_oid: sun.security.util.ObjectIdentifier
                public static readonly RSA_oid: sun.security.util.ObjectIdentifier
                public static readonly RSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly AES_oid: sun.security.util.ObjectIdentifier
                public static readonly md2WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly md5WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly sha1WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly sha1WithRSAEncryption_OIW_oid: sun.security.util.ObjectIdentifier
                public static readonly sha224WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly sha256WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly sha384WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly sha512WithRSAEncryption_oid: sun.security.util.ObjectIdentifier
                public static readonly shaWithDSA_OIW_oid: sun.security.util.ObjectIdentifier
                public static readonly sha1WithDSA_OIW_oid: sun.security.util.ObjectIdentifier
                public static readonly sha1WithDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha224WithDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha256WithDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha1WithECDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha224WithECDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha256WithECDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha384WithECDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly sha512WithECDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly specifiedWithECDSA_oid: sun.security.util.ObjectIdentifier
                public static readonly pbeWithMD5AndDES_oid: sun.security.util.ObjectIdentifier
                public static readonly pbeWithMD5AndRC2_oid: sun.security.util.ObjectIdentifier
                public static readonly pbeWithSHA1AndDES_oid: sun.security.util.ObjectIdentifier
                public static readonly pbeWithSHA1AndRC2_oid: sun.security.util.ObjectIdentifier
                public static pbeWithSHA1AndDESede_oid: sun.security.util.ObjectIdentifier
                public static pbeWithSHA1AndRC2_40_oid: sun.security.util.ObjectIdentifier
                public constructor()
                public constructor(arg0: sun.security.util.ObjectIdentifier)
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: java.security.AlgorithmParameters)
                protected decodeParams(): void
                public encode(arg0: sun.security.util.DerOutputStream): void
                public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public encode(): byte[]
                public getOID(): sun.security.util.ObjectIdentifier
                public getName(): string
                public getParameters(): java.security.AlgorithmParameters
                public getEncodedParams(): byte[]
                public equals(arg0: sun.security.x509.AlgorithmId): boolean
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
        }
    }
}