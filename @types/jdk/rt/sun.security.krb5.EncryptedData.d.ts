declare namespace sun {
    namespace security {
        namespace krb5 {
            class EncryptedData implements java.lang.Cloneable {
                public static ETYPE_NULL: int
                public static ETYPE_DES_CBC_CRC: int
                public static ETYPE_DES_CBC_MD4: int
                public static ETYPE_DES_CBC_MD5: int
                public static ETYPE_ARCFOUR_HMAC: int
                public static ETYPE_ARCFOUR_HMAC_EXP: int
                public static ETYPE_DES3_CBC_HMAC_SHA1_KD: int
                public static ETYPE_AES128_CTS_HMAC_SHA1_96: int
                public static ETYPE_AES256_CTS_HMAC_SHA1_96: int
                public clone(): java.lang.Object
                public constructor(arg0: int, arg1: java.lang.Integer, arg2: byte[])
                public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: byte[], arg2: int)
                public decrypt(arg0: sun.security.krb5.EncryptionKey, arg1: int): byte[]
                public asn1Encode(): byte[]
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.EncryptedData
                public reset(arg0: byte[]): byte[]
                public getEType(): int
                public getKeyVersionNumber(): java.lang.Integer
                public getBytes(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}