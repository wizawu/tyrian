declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
                                class SAX2StAXStreamWriter extends com.sun.org.apache.xalan.internal.xsltc.trax.SAX2StAXBaseWriter {
                                    public constructor()
                                    public constructor(arg0: javax.xml.stream.XMLStreamWriter)
                                    public getStreamWriter(): javax.xml.stream.XMLStreamWriter
                                    public setStreamWriter(arg0: javax.xml.stream.XMLStreamWriter): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public comment(arg0: char[], arg1: int, arg2: int): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public endCDATA(): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
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