declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace signature {
class XMLSignature extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
    public static ALGO_ID_MAC_HMAC_SHA1: string
    public static ALGO_ID_SIGNATURE_DSA: string
    public static ALGO_ID_SIGNATURE_DSA_SHA256: string
    public static ALGO_ID_SIGNATURE_RSA: string
    public static ALGO_ID_SIGNATURE_RSA_SHA1: string
    public static ALGO_ID_SIGNATURE_NOT_RECOMMENDED_RSA_MD5: string
    public static ALGO_ID_SIGNATURE_RSA_RIPEMD160: string
    public static ALGO_ID_SIGNATURE_RSA_SHA256: string
    public static ALGO_ID_SIGNATURE_RSA_SHA384: string
    public static ALGO_ID_SIGNATURE_RSA_SHA512: string
    public static ALGO_ID_MAC_HMAC_NOT_RECOMMENDED_MD5: string
    public static ALGO_ID_MAC_HMAC_RIPEMD160: string
    public static ALGO_ID_MAC_HMAC_SHA256: string
    public static ALGO_ID_MAC_HMAC_SHA384: string
    public static ALGO_ID_MAC_HMAC_SHA512: string
    public static ALGO_ID_SIGNATURE_ECDSA_SHA1: string
    public static ALGO_ID_SIGNATURE_ECDSA_SHA256: string
    public static ALGO_ID_SIGNATURE_ECDSA_SHA384: string
    public static ALGO_ID_SIGNATURE_ECDSA_SHA512: string
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: org.w3c.dom.Element, arg3: org.w3c.dom.Element)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
    public setId(arg0: java.lang.String | string): void
    public getId(): string
    public getSignedInfo(): com.sun.org.apache.xml.internal.security.signature.SignedInfo
    public getSignatureValue(): byte[]
    public getKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
    public appendObject(arg0: com.sun.org.apache.xml.internal.security.signature.ObjectContainer): void
    public getObjectItem(arg0: int): com.sun.org.apache.xml.internal.security.signature.ObjectContainer
    public getObjectLength(): int
    public sign(arg0: java.security.Key): void
    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver): void
    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi): void
    public checkSignatureValue(arg0: java.security.cert.X509Certificate): boolean
    public checkSignatureValue(arg0: java.security.Key): boolean
    public addDocument(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public addDocument(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg2: java.lang.String | string): void
    public addDocument(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms): void
    public addDocument(arg0: java.lang.String | string): void
    public addKeyInfo(arg0: java.security.cert.X509Certificate): void
    public addKeyInfo(arg0: java.security.PublicKey): void
    public createSecretKey(arg0: byte[]): javax.crypto.SecretKey
    public setFollowNestedManifests(arg0: boolean): void
    public getBaseLocalName(): string
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