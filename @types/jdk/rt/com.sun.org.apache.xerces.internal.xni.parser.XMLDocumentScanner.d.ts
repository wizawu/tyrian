declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
                                interface XMLDocumentScanner extends com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource {
                                    setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                    scanDocument(arg0: boolean): boolean
                                    next(): int
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}