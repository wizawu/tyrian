declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class EntityResolverWrapper implements com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver {
    protected fEntityResolver: org.xml.sax.EntityResolver
    public constructor()
    public constructor(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda)
    public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
    public getEntityResolver(): org.xml.sax.EntityResolver
    public resolveEntity(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
    public static class: java.lang.Class<any>
}

class EntityResolverWrapper$$Lambda implements com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver {
    protected fEntityResolver: org.xml.sax.EntityResolver
}

                        }
                    }
                }
            }
        }
    }
}