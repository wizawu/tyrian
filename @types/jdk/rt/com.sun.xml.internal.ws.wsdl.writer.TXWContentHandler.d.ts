declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            class TXWContentHandler implements org.xml.sax.ContentHandler {
                                public constructor(arg0: com.sun.xml.internal.txw2.TypedXmlWriter)
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public startDocument(): void
                                public endDocument(): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}