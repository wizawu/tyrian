declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
interface SerializationHandler extends com.sun.org.apache.xml.internal.serializer.ExtendedContentHandler , com.sun.org.apache.xml.internal.serializer.ExtendedLexicalHandler , com.sun.org.apache.xml.internal.serializer.XSLOutputAttributes , org.xml.sax.ext.DeclHandler , org.xml.sax.DTDHandler , org.xml.sax.ErrorHandler , com.sun.org.apache.xml.internal.serializer.DOMSerializer , com.sun.org.apache.xml.internal.serializer.Serializer {
    setContentHandler(arg0: org.xml.sax.ContentHandler): void
    close(): void
    serialize(arg0: org.w3c.dom.Node): void
    setEscaping(arg0: boolean): boolean
    setIndentAmount(arg0: int): void
    setTransformer(arg0: javax.xml.transform.Transformer): void
    getTransformer(): javax.xml.transform.Transformer
    setNamespaceMappings(arg0: com.sun.org.apache.xml.internal.serializer.NamespaceMappings): void
    flushPending(): void
    setDTDEntityExpansion(arg0: boolean): void
    setIsStandalone(arg0: boolean): void
}

                        }
                    }
                }
            }
        }
    }
}