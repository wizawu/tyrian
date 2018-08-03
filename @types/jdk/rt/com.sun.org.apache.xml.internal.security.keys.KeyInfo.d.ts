declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                class KeyInfo extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public setSecureValidation(arg0: boolean): void
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public addKeyName(arg0: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.KeyName): void
                                    public addKeyValue(arg0: java.security.PublicKey): void
                                    public addKeyValue(arg0: org.w3c.dom.Element): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.keyvalues.DSAKeyValue): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.keyvalues.RSAKeyValue): void
                                    public add(arg0: java.security.PublicKey): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.KeyValue): void
                                    public addMgmtData(arg0: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.MgmtData): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.PGPData): void
                                    public addRetrievalMethod(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg2: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.RetrievalMethod): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.SPKIData): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.X509Data): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptedKey): void
                                    public addDEREncodedKeyValue(arg0: java.security.PublicKey): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.DEREncodedKeyValue): void
                                    public addKeyInfoReference(arg0: java.lang.String | string): void
                                    public add(arg0: com.sun.org.apache.xml.internal.security.keys.content.KeyInfoReference): void
                                    public addUnknownElement(arg0: org.w3c.dom.Element): void
                                    public lengthKeyName(): int
                                    public lengthKeyValue(): int
                                    public lengthMgmtData(): int
                                    public lengthPGPData(): int
                                    public lengthRetrievalMethod(): int
                                    public lengthSPKIData(): int
                                    public lengthX509Data(): int
                                    public lengthDEREncodedKeyValue(): int
                                    public lengthKeyInfoReference(): int
                                    public lengthUnknownElement(): int
                                    public itemKeyName(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.KeyName
                                    public itemKeyValue(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.KeyValue
                                    public itemMgmtData(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.MgmtData
                                    public itemPGPData(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.PGPData
                                    public itemRetrievalMethod(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.RetrievalMethod
                                    public itemSPKIData(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.SPKIData
                                    public itemX509Data(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.X509Data
                                    public itemEncryptedKey(arg0: int): com.sun.org.apache.xml.internal.security.encryption.EncryptedKey
                                    public itemDEREncodedKeyValue(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.DEREncodedKeyValue
                                    public itemKeyInfoReference(arg0: int): com.sun.org.apache.xml.internal.security.keys.content.KeyInfoReference
                                    public itemUnknownElement(arg0: int): org.w3c.dom.Element
                                    public isEmpty(): boolean
                                    public containsKeyName(): boolean
                                    public containsKeyValue(): boolean
                                    public containsMgmtData(): boolean
                                    public containsPGPData(): boolean
                                    public containsRetrievalMethod(): boolean
                                    public containsSPKIData(): boolean
                                    public containsUnknownElement(): boolean
                                    public containsX509Data(): boolean
                                    public containsDEREncodedKeyValue(): boolean
                                    public containsKeyInfoReference(): boolean
                                    public getPublicKey(): java.security.PublicKey
                                    public getX509Certificate(): java.security.cert.X509Certificate
                                    public getSecretKey(): javax.crypto.SecretKey
                                    public getPrivateKey(): java.security.PrivateKey
                                    public registerInternalKeyResolver(arg0: com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi): void
                                    public addStorageResolver(arg0: com.sun.org.apache.xml.internal.security.keys.storage.StorageResolver): void
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