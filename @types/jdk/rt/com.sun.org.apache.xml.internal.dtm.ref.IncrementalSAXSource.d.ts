declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                interface IncrementalSAXSource {
                                    setContentHandler(arg0: org.xml.sax.ContentHandler): void
                                    setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                                    setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                                    deliverMoreNodes(arg0: boolean): java.lang.Object
                                    startParse(arg0: org.xml.sax.InputSource): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}