declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface Serializer {
                                    setCanonicalizer(arg0: com.sun.org.apache.xml.internal.security.c14n.Canonicalizer): void
                                    serializeToByteArray(arg0: org.w3c.dom.Element): byte[]
                                    serializeToByteArray(arg0: org.w3c.dom.NodeList): byte[]
                                    canonSerializeToByteArray(arg0: org.w3c.dom.Node): byte[]
                                    deserialize(arg0: byte[], arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}