declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface CipherData {
                                    VALUE_TYPE: int
                                    REFERENCE_TYPE: int
                                    getDataType(): int
                                    getCipherValue(): com.sun.org.apache.xml.internal.security.encryption.CipherValue
                                    setCipherValue(arg0: com.sun.org.apache.xml.internal.security.encryption.CipherValue): void
                                    getCipherReference(): com.sun.org.apache.xml.internal.security.encryption.CipherReference
                                    setCipherReference(arg0: com.sun.org.apache.xml.internal.security.encryption.CipherReference): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}