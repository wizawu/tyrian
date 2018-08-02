declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                class IncrementalSAXSource_Filter implements com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource , org.xml.sax.ContentHandler , org.xml.sax.DTDHandler , org.xml.sax.ext.LexicalHandler , org.xml.sax.ErrorHandler , java.lang.Runnable {
                                    public constructor()
                                    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.ref.CoroutineManager, arg1: int)
                                    public static createIncrementalSAXSource(arg0: com.sun.org.apache.xml.internal.dtm.ref.CoroutineManager, arg1: int): com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource
                                    public init(arg0: com.sun.org.apache.xml.internal.dtm.ref.CoroutineManager, arg1: int, arg2: int): void
                                    public setXMLReader(arg0: org.xml.sax.XMLReader): void
                                    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
                                    public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                                    public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                                    public setErrHandler(arg0: org.xml.sax.ErrorHandler): void
                                    public setReturnFrequency(arg0: int): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public endDocument(): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public skippedEntity(arg0: java.lang.String | string): void
                                    public startDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public comment(arg0: char[], arg1: int, arg2: int): void
                                    public endCDATA(): void
                                    public endDTD(): void
                                    public endEntity(arg0: java.lang.String | string): void
                                    public startCDATA(): void
                                    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public startEntity(arg0: java.lang.String | string): void
                                    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                    public error(arg0: org.xml.sax.SAXParseException): void
                                    public fatalError(arg0: org.xml.sax.SAXParseException): void
                                    public warning(arg0: org.xml.sax.SAXParseException): void
                                    public getSourceCoroutineID(): int
                                    public getControllerCoroutineID(): int
                                    public getCoroutineManager(): com.sun.org.apache.xml.internal.dtm.ref.CoroutineManager
                                    protected count_and_yield(arg0: boolean): void
                                    public startParse(arg0: org.xml.sax.InputSource): void
                                    public run(): void
                                    public deliverMoreNodes(arg0: boolean): java.lang.Object
                                    public static class: java.lang.Class<any>
                                }
                                class IncrementalSAXSource_Filter$$Lambda implements com.sun.org.apache.xml.internal.dtm.ref.IncrementalSAXSource , org.xml.sax.ContentHandler , org.xml.sax.DTDHandler , org.xml.sax.ext.LexicalHandler , org.xml.sax.ErrorHandler , java.lang.Runnable {
                                    public constructor()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}