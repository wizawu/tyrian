declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface EncryptedKey extends com.sun.org.apache.xml.internal.security.encryption.EncryptedType {
                                    getRecipient(): string
                                    setRecipient(arg0: java.lang.String | string): void
                                    getReferenceList(): com.sun.org.apache.xml.internal.security.encryption.ReferenceList
                                    setReferenceList(arg0: com.sun.org.apache.xml.internal.security.encryption.ReferenceList): void
                                    getCarriedName(): string
                                    setCarriedName(arg0: java.lang.String | string): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}