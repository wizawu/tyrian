declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                class IncrementalSAXSource_Xerces implements com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource {
                                    public constructor()
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.parsers.SAXParser)
                                    public static createIncrementalSAXSource(): com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource
                                    public static createIncrementalSAXSource(arg0: com.sun.org.apache.xerces.internal.parsers.SAXParser): com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource
                                    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
                                    public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                                    public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                                    public startParse(arg0: org.xml.sax.InputSource): void
                                    public deliverMoreNodes(arg0: boolean): java.lang.Object
                                    public static _main(arg0: java.lang.String[]): void
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