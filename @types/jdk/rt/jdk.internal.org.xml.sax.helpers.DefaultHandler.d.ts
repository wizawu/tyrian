declare namespace jdk {
    namespace internal {
        namespace org {
            namespace xml {
                namespace sax {
                    namespace helpers {
                        class DefaultHandler implements jdk.internal.org.xml.sax.EntityResolver , jdk.internal.org.xml.sax.DTDHandler , jdk.internal.org.xml.sax.ContentHandler , jdk.internal.org.xml.sax.ErrorHandler {
                            public constructor()
                            public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.xml.sax.InputSource
                            public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public setDocumentLocator(arg0: jdk.internal.org.xml.sax.Locator): void
                            public startDocument(): void
                            public endDocument(): void
                            public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public endPrefixMapping(arg0: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                            public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public skippedEntity(arg0: java.lang.String | string): void
                            public warning(arg0: jdk.internal.org.xml.sax.SAXParseException): void
                            public error(arg0: jdk.internal.org.xml.sax.SAXParseException): void
                            public fatalError(arg0: jdk.internal.org.xml.sax.SAXParseException): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}