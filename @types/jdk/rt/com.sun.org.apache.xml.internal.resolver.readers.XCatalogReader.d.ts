declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace readers {
                                class XCatalogReader extends com.sun.org.apache.xml.internal.resolver.readers.SAXCatalogReader implements com.sun.org.apache.xml.internal.resolver.readers.SAXCatalogParser {
                                    protected catalog: com.sun.org.apache.xml.internal.resolver.Catalog
                                    public setCatalog(arg0: com.sun.org.apache.xml.internal.resolver.Catalog): void
                                    public getCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
                                    public constructor(arg0: javax.xml.parsers.SAXParserFactory)
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
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