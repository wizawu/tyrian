declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace utils {
                                namespace resolver {
abstract class ResourceResolverSpi {
    protected properties: java.util.Map<java.lang.String, java.lang.String>
    protected secureValidation: boolean
    public constructor()
    public engineResolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
    public engineResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
    public engineSetProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public engineGetProperty(arg0: java.lang.String | string): string
    public engineAddProperies(arg0: java.util.Map<java.lang.String, java.lang.String>): void
    public engineIsThreadSafe(): boolean
    public engineCanResolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): boolean
    public engineCanResolveURI(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverContext): boolean
    public engineGetPropertyKeys(): java.lang.String[]
    public understandsProperty(arg0: java.lang.String | string): boolean
    public static fixURI(arg0: java.lang.String | string): string
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
}