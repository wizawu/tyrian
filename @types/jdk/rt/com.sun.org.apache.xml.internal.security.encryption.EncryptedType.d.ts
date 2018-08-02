declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
interface EncryptedType {
    getId(): string
    setId(arg0: java.lang.String | string): void
    getType(): string
    setType(arg0: java.lang.String | string): void
    getMimeType(): string
    setMimeType(arg0: java.lang.String | string): void
    getEncoding(): string
    setEncoding(arg0: java.lang.String | string): void
    getEncryptionMethod(): com.sun.org.apache.xml.internal.security.encryption.EncryptionMethod
    setEncryptionMethod(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptionMethod): void
    getKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
    setKeyInfo(arg0: com.sun.org.apache.xml.internal.security.keys.KeyInfo): void
    getCipherData(): com.sun.org.apache.xml.internal.security.encryption.CipherData
    getEncryptionProperties(): com.sun.org.apache.xml.internal.security.encryption.EncryptionProperties
    setEncryptionProperties(arg0: com.sun.org.apache.xml.internal.security.encryption.EncryptionProperties): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}