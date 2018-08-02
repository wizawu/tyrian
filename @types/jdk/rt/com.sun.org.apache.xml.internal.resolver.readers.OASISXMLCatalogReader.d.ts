declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace readers {
                                class OASISXMLCatalogReader extends com.sun.org.apache.xml.internal.resolver.readers.SAXCatalogReader implements com.sun.org.apache.xml.internal.resolver.readers.SAXCatalogParser {
                                    protected catalog: com.sun.org.apache.xml.internal.resolver.Catalog
                                    public static namespaceName: string
                                    public static tr9401NamespaceName: string
                                    protected baseURIStack: java.util.Stack
                                    protected overrideStack: java.util.Stack
                                    protected namespaceStack: java.util.Stack
                                    public constructor()
                                    public setCatalog(arg0: com.sun.org.apache.xml.internal.resolver.Catalog): void
                                    public getCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
                                    protected inExtensionNamespace(): boolean
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public checkAttributes(arg0: org.xml.sax.Attributes, arg1: java.lang.String | string): boolean
                                    public checkAttributes(arg0: org.xml.sax.Attributes, arg1: java.lang.String | string, arg2: java.lang.String | string): boolean
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public skippedEntity(arg0: java.lang.String | string): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
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