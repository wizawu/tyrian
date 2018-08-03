declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        namespace sax {
                            class SAXBufferCreator extends com.sun.xml.internal.stream.buffer.AbstractCreator implements org.xml.sax.EntityResolver , org.xml.sax.DTDHandler , org.xml.sax.ContentHandler , org.xml.sax.ErrorHandler , org.xml.sax.ext.LexicalHandler {
                                protected _namespaceAttributes: java.lang.String[]
                                protected _namespaceAttributesPtr: int
                                public constructor()
                                public constructor(arg0: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer)
                                public create(arg0: org.xml.sax.XMLReader, arg1: java.io.InputStream | java.io.InputStream$$Lambda): com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer
                                public create(arg0: org.xml.sax.XMLReader, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.lang.String | string): com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer
                                public reset(): void
                                public startDocument(): void
                                public endDocument(): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public comment(arg0: char[], arg1: int, arg2: int): void
                                public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
                                public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endDTD(): void
                                public startEntity(arg0: java.lang.String | string): void
                                public endEntity(arg0: java.lang.String | string): void
                                public startCDATA(): void
                                public endCDATA(): void
                                public warning(arg0: org.xml.sax.SAXParseException): void
                                public error(arg0: org.xml.sax.SAXParseException): void
                                public fatalError(arg0: org.xml.sax.SAXParseException): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}