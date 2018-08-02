declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace readers {
                                class SAXCatalogReader implements com.sun.org.apache.xml.internal.resolver.readers.CatalogReader , org.xml.sax.ContentHandler , org.xml.sax.DocumentHandler {
                                    protected parserFactory: javax.xml.parsers.SAXParserFactory
                                    protected parserClass: string
                                    protected namespaceMap: java.util.Map<java.lang.String, java.lang.String>
                                    protected debug: com.sun.org.apache.xml.internal.resolver.helpers.Debug
                                    public setParserFactory(arg0: javax.xml.parsers.SAXParserFactory): void
                                    public setParserClass(arg0: java.lang.String | string): void
                                    public getParserFactory(): javax.xml.parsers.SAXParserFactory
                                    public getParserClass(): string
                                    public constructor()
                                    public constructor(arg0: javax.xml.parsers.SAXParserFactory)
                                    public constructor(arg0: java.lang.String | string)
                                    public setCatalogParser(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public getCatalogParser(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                    public readCatalog(arg0: com.sun.org.apache.xml.internal.resolver.Catalog, arg1: java.lang.String | string): void
                                    public readCatalog(arg0: com.sun.org.apache.xml.internal.resolver.Catalog, arg1: java.io.InputStream): void
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
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
}