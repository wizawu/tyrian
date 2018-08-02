declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace tools {
                                class ResolvingXMLFilter extends org.xml.sax.helpers.XMLFilterImpl {
                                    public static suppressExplanation: boolean
                                    public constructor()
                                    public constructor(arg0: org.xml.sax.XMLReader)
                                    public constructor(arg0: com.sun.org.apache.xml.internal.resolver.CatalogManager)
                                    public constructor(arg0: org.xml.sax.XMLReader, arg1: com.sun.org.apache.xml.internal.resolver.CatalogManager)
                                    public getCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
                                    public parse(arg0: org.xml.sax.InputSource): void
                                    public parse(arg0: java.lang.String | string): void
                                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
                                    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
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