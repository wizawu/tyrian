declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class DOMEntityResolverWrapper implements com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver {
    protected fEntityResolver: org.w3c.dom.ls.LSResourceResolver
    public constructor()
    public constructor(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda)
    public setEntityResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
    public getEntityResolver(): org.w3c.dom.ls.LSResourceResolver
    public resolveEntity(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
    public static class: java.lang.Class<any>
}

class DOMEntityResolverWrapper$$Lambda implements com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver {
    protected fEntityResolver: org.w3c.dom.ls.LSResourceResolver
}

                        }
                    }
                }
            }
        }
    }
}