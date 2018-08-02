declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface CipherReference {
                                    getURI(): string
                                    getURIAsAttr(): org.w3c.dom.Attr
                                    getTransforms(): com.sun.org.apache.xml.internal.security.encryption.Transforms
                                    setTransforms(arg0: com.sun.org.apache.xml.internal.security.encryption.Transforms | com.sun.org.apache.xml.internal.security.encryption.Transforms$$Lambda): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}