declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace xml {
                            class ContentHandlerToXMLStreamWriter extends org.xml.sax.helpers.DefaultHandler {
                                public constructor(arg0: javax.xml.stream.XMLStreamWriter)
                                public endDocument(): void
                                public startDocument(): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}