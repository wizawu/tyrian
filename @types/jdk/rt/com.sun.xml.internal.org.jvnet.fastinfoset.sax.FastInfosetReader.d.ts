declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
                            namespace sax {
                                interface FastInfosetReader extends org.xml.sax.XMLReader , com.sun.xml.internal.org.jvnet.fastinfoset.FastInfosetParser {
                                    ENCODING_ALGORITHM_CONTENT_HANDLER_PROPERTY: string
                                    PRIMITIVE_TYPE_CONTENT_HANDLER_PROPERTY: string
                                    parse(arg0: java.io.InputStream): void
                                    setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                                    getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                                    setDeclHandler(arg0: org.xml.sax.ext.DeclHandler): void
                                    getDeclHandler(): org.xml.sax.ext.DeclHandler
                                    setEncodingAlgorithmContentHandler(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler): void
                                    getEncodingAlgorithmContentHandler(): com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler
                                    setPrimitiveTypeContentHandler(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler): void
                                    getPrimitiveTypeContentHandler(): com.sun.xml.internal.org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}