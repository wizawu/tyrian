declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace tools {
                                class CatalogResolver implements org.xml.sax.EntityResolver , javax.xml.transform.URIResolver {
                                    public namespaceAware: boolean
                                    public validating: boolean
                                    public constructor()
                                    public constructor(arg0: boolean)
                                    public constructor(arg0: com.sun.org.apache.xml.internal.resolver.CatalogManager)
                                    public getCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
                                    public getResolvedEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
                                    public resolve(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.transform.Source
                                    public static class: java.lang.Class<any>
                                }
                                class CatalogResolver$$Lambda implements org.xml.sax.EntityResolver , javax.xml.transform.URIResolver {
                                    public namespaceAware: boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}