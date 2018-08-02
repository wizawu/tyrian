declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                class XMLCipher$Factory$ReferenceListImpl implements com.sun.org.apache.xml.internal.security.encryption.ReferenceList {
                                    public constructor(arg0: com.sun.org.apache.xml.internal.security.encryption.XMLCipher$Factory, arg1: int)
                                    public add(arg0: com.sun.org.apache.xml.internal.security.encryption.Reference): void
                                    public remove(arg0: com.sun.org.apache.xml.internal.security.encryption.Reference): void
                                    public size(): int
                                    public isEmpty(): boolean
                                    public getReferences(): java.util.Iterator<com.sun.org.apache.xml.internal.security.encryption.Reference>
                                    public newDataReference(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.Reference
                                    public newKeyReference(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.encryption.Reference
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