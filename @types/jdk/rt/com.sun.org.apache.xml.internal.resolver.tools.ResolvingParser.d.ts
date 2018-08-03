declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace tools {
                                class ResolvingParser implements org.xml.sax.Parser , org.xml.sax.DTDHandler , org.xml.sax.DocumentHandler , org.xml.sax.EntityResolver {
                                    public static namespaceAware: boolean
                                    public static validating: boolean
                                    public static suppressExplanation: boolean
                                    public constructor()
                                    public constructor(arg0: com.sun.org.apache.xml.internal.resolver.CatalogManager)
                                    public getCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
                                    public parse(arg0: org.xml.sax.InputSource): void
                                    public parse(arg0: java.lang.String | string): void
                                    public setDocumentHandler(arg0: org.xml.sax.DocumentHandler): void
                                    public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                                    public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                                    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                                    public setLocale(arg0: java.util.Locale): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public endDocument(): void
                                    public endElement(arg0: java.lang.String | string): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public startDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
                                    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
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