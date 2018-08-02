declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
interface ReferenceList {
    DATA_REFERENCE: int
    KEY_REFERENCE: int
    add(arg0: com.sun.org.apache.xml.internal.security.encryption.Reference): void
    remove(arg0: com.sun.org.apache.xml.internal.security.encryption.Reference): void
    size(): int
    isEmpty(): boolean
    getReferences(): java.util.Iterator<com.sun.org.apache.xml.internal.security.encryption.Reference>
    newDataReference(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.Reference
    newKeyReference(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.Reference
}

                            }
                        }
                    }
                }
            }
        }
    }
}