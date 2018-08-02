declare namespace sun {
    namespace security {
        namespace krb5 {
            class Checksum {
                public static CKSUMTYPE_NULL: int
                public static CKSUMTYPE_CRC32: int
                public static CKSUMTYPE_RSA_MD4: int
                public static CKSUMTYPE_RSA_MD4_DES: int
                public static CKSUMTYPE_DES_MAC: int
                public static CKSUMTYPE_DES_MAC_K: int
                public static CKSUMTYPE_RSA_MD4_DES_K: int
                public static CKSUMTYPE_RSA_MD5: int
                public static CKSUMTYPE_RSA_MD5_DES: int
                public static CKSUMTYPE_HMAC_SHA1_DES3_KD: int
                public static CKSUMTYPE_HMAC_SHA1_96_AES128: int
                public static CKSUMTYPE_HMAC_SHA1_96_AES256: int
                public static CKSUMTYPE_HMAC_MD5_ARCFOUR: int
                public static initStatic(): void
                public constructor(arg0: byte[], arg1: int)
                public constructor(arg0: int, arg1: byte[])
                public constructor(arg0: int, arg1: byte[], arg2: sun.security.krb5.EncryptionKey, arg3: int)
                public verifyKeyedChecksum(arg0: byte[], arg1: sun.security.krb5.EncryptionKey, arg2: int): boolean
                public asn1Encode(): byte[]
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.Checksum
                public getBytes(): byte[]
                public getType(): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}