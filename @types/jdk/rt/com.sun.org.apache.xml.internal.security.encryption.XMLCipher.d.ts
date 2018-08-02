declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
class XMLCipher {
    public static TRIPLEDES: string
    public static AES_128: string
    public static AES_256: string
    public static AES_192: string
    public static AES_128_GCM: string
    public static AES_192_GCM: string
    public static AES_256_GCM: string
    public static RSA_v1dot5: string
    public static RSA_OAEP: string
    public static RSA_OAEP_11: string
    public static DIFFIE_HELLMAN: string
    public static TRIPLEDES_KeyWrap: string
    public static AES_128_KeyWrap: string
    public static AES_256_KeyWrap: string
    public static AES_192_KeyWrap: string
    public static SHA1: string
    public static SHA256: string
    public static SHA512: string
    public static RIPEMD_160: string
    public static XML_DSIG: string
    public static N14C_XML: string
    public static N14C_XML_WITH_COMMENTS: string
    public static EXCL_XML_N14C: string
    public static EXCL_XML_N14C_WITH_COMMENTS: string
    public static PHYSICAL_XML_N14C: string
    public static BASE64_ENCODING: string
    public static ENCRYPT_MODE: int
    public static DECRYPT_MODE: int
    public static UNWRAP_MODE: int
    public static WRAP_MODE: int
    public setSerializer(arg0: com.sun.org.apache.xml.internal.security.encryption.Serializer): void
    public getSerializer(): com.sun.org.apache.xml.internal.security.encryption.Serializer
    public static getInstance(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getProviderInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getProviderInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getProviderInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getInstance(): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public static getProviderInstance(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.XMLCipher
    public init(arg0: int, arg1: java.security.Key): void
    public setSecureValidation(arg0: boolean): void
    public registerInternalKeyResolver(arg0: com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi): void
    public getEncryptedData(): com.sun.org.apache.xml.internal.security.encryption.EncryptedData
    public getEncryptedKey(): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
    public setKEK(arg0: java.security.Key): void
    public martial(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptedData): org.w3c.dom.Element
    public martial(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.encryption.EncryptedData): org.w3c.dom.Element
    public martial(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptedKey): org.w3c.dom.Element
    public martial(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.encryption.EncryptedKey): org.w3c.dom.Element
    public martial(arg0: com.sun.org.apache.xml.internal.security.encryption.ReferenceList): org.w3c.dom.Element
    public martial(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.encryption.ReferenceList): org.w3c.dom.Element
    public doFinal(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Document): org.w3c.dom.Document
    public doFinal(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element): org.w3c.dom.Document
    public doFinal(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element, arg2: boolean): org.w3c.dom.Document
    public encryptData(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element): com.sun.org.apache.xml.internal.security.encryption.EncryptedData
    public encryptData(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.io.InputStream): com.sun.org.apache.xml.internal.security.encryption.EncryptedData
    public encryptData(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element, arg2: boolean): com.sun.org.apache.xml.internal.security.encryption.EncryptedData
    public loadEncryptedData(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element): com.sun.org.apache.xml.internal.security.encryption.EncryptedData
    public loadEncryptedKey(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Element): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
    public loadEncryptedKey(arg0: org.w3c.dom.Element): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
    public encryptKey(arg0: org.w3c.dom.Document, arg1: java.security.Key): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
    public encryptKey(arg0: org.w3c.dom.Document, arg1: java.security.Key, arg2: java.lang.String | string, arg3: byte[]): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
    public decryptKey(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptedKey, arg1: java.lang.String | string): java.security.Key
    public decryptKey(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptedKey): java.security.Key
    public decryptToByteArray(arg0: org.w3c.dom.Element): byte[]
    public createEncryptedData(arg0: int, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.EncryptedData
    public createEncryptedKey(arg0: int, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
    public createAgreementMethod(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.AgreementMethod
    public createCipherData(arg0: int): com.sun.org.apache.xml.internal.security.encryption.CipherData
    public createCipherReference(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.CipherReference
    public createCipherValue(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.CipherValue
    public createEncryptionMethod(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.EncryptionMethod
    public createEncryptionProperties(): com.sun.org.apache.xml.internal.security.encryption.EncryptionProperties
    public createEncryptionProperty(): com.sun.org.apache.xml.internal.security.encryption.EncryptionProperty
    public createReferenceList(arg0: int): com.sun.org.apache.xml.internal.security.encryption.ReferenceList
    public createTransforms(): com.sun.org.apache.xml.internal.security.encryption.Transforms
    public createTransforms(arg0: org.w3c.dom.Document): com.sun.org.apache.xml.internal.security.encryption.Transforms
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}