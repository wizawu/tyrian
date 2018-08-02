declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
                                interface DOMDocumentHandler extends com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler {
                                    setDOMResult(arg0: javax.xml.transform.dom.DOMResult): void
                                    doctypeDecl(arg0: org.w3c.dom.DocumentType): void
                                    characters(arg0: org.w3c.dom.Text): void
                                    cdata(arg0: org.w3c.dom.CDATASection): void
                                    comment(arg0: org.w3c.dom.Comment): void
                                    processingInstruction(arg0: org.w3c.dom.ProcessingInstruction): void
                                    setIgnoringCharacters(arg0: boolean): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}