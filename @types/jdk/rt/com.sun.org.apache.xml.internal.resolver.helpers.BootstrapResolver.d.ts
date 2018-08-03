declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            namespace helpers {
                                class BootstrapResolver implements org.xml.sax.EntityResolver , javax.xml.transform.URIResolver {
                                    public static readonly xmlCatalogXSD: string
                                    public static readonly xmlCatalogRNG: string
                                    public static readonly xmlCatalogPubId: string
                                    public static readonly xmlCatalogSysId: string
                                    public constructor()
                                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
                                    public resolve(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.transform.Source
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